import {post, requestBody, HttpErrors} from '@loopback/rest';
import {TokenService} from '@loopback/authentication';
import {securityId, UserProfile} from '@loopback/security';

interface Credentials {
  email: string;
  password: string;
}

const MOCK_USERS = [
  {
    id: 1,
    email: 'user@user.com',
    password: 'hello',
    name: 'Test User'
  },
  {
    id: 2,
    email: 'admin@admin.com',
    password: 'admin123',
    name: 'Admin User'
  }
];

class SimpleTokenService implements TokenService {
  async generateToken(userProfile: UserProfile): Promise<string> {
    const payload = Buffer.from(JSON.stringify(userProfile)).toString('base64');
    return payload;
  }
  async verifyToken(token: string): Promise<UserProfile> {
    const decoded = Buffer.from(token, 'base64').toString();
    return JSON.parse(decoded);
  }
}

export class AuthController {
  public jwtService: TokenService;
  constructor() {
    this.jwtService = new SimpleTokenService();
  }

  @post('/login')
  async login(
    @requestBody({
      description: 'User credentials',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
              email: {type: 'string', format: 'email'},
              password: {type: 'string', minLength: 1},
            },
          },
        },
      },
    }) credentials: Credentials,
  ): Promise<{token: string; user: {id: number; email: string; name: string}}> {
    try {
      console.log('Login attempt with:', credentials);

      const user = MOCK_USERS.find(u =>
        u.email === credentials.email && u.password === credentials.password
      );

      if (!user) {
        throw new HttpErrors.Unauthorized('Invalid email or password');
      }

      console.log('User found:', user.email);

      const profile: UserProfile = {
        [securityId]: user.id.toString(),
        id: user.id.toString(),
        name: user.name,
        email: user.email,
      };





      console.log('Generating token for user profile:', profile);

      const token = await this.jwtService.generateToken(profile);

      console.log('Token generated successfully');

      return {
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      };
    } catch (error) {
      console.error('Login error:', error);

      if (error.statusCode) {
        throw error;
      }

      throw new HttpErrors.InternalServerError('Login failed: ' + error.message);
    }
  }

  @post('/register')
  async register(
    @requestBody({
      description: 'User registration data',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
              email: {type: 'string', format: 'email'},
              password: {type: 'string', minLength: 1},
              name: {type: 'string'},
            },
          },
        },
      },
    }) userData: {email: string; password: string; name?: string},
  ): Promise<{message: string; user: {id: number; email: string; name: string}}> {
    try {
      console.log('Registration attempt with:', userData);

      const existingUser = MOCK_USERS.find(u => u.email === userData.email);

      if (existingUser) {
        throw new HttpErrors.UnprocessableEntity('Email already exists');
      }

      const newUser = {
        id: MOCK_USERS.length + 1,
        email: userData.email,
        password: userData.password,
        name: userData.name ?? 'New User'
      };

      MOCK_USERS.push(newUser);

      console.log('User registered:', newUser.email);

      return {
        message: 'User registered successfully',
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name
        }
      };
    } catch (error) {
      console.error('Registration error:', error);

      if (error.statusCode) {
        throw error;
      }

      throw new HttpErrors.InternalServerError('Registration failed: ' + error.message);
    }
  }
}