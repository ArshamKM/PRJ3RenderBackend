"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
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
class SimpleTokenService {
    async generateToken(userProfile) {
        const payload = Buffer.from(JSON.stringify(userProfile)).toString('base64');
        return payload;
    }
    async verifyToken(token) {
        const decoded = Buffer.from(token, 'base64').toString();
        return JSON.parse(decoded);
    }
}
class AuthController {
    constructor() {
        this.jwtService = new SimpleTokenService();
    }
    async login(credentials) {
        try {
            console.log('Login attempt with:', credentials);
            const user = MOCK_USERS.find(u => u.email === credentials.email && u.password === credentials.password);
            if (!user) {
                throw new rest_1.HttpErrors.Unauthorized('Invalid email or password');
            }
            console.log('User found:', user.email);
            const profile = {
                [security_1.securityId]: user.id.toString(),
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
        }
        catch (error) {
            console.error('Login error:', error);
            if (error.statusCode) {
                throw error;
            }
            throw new rest_1.HttpErrors.InternalServerError('Login failed: ' + error.message);
        }
    }
    async register(userData) {
        var _a;
        try {
            console.log('Registration attempt with:', userData);
            const existingUser = MOCK_USERS.find(u => u.email === userData.email);
            if (existingUser) {
                throw new rest_1.HttpErrors.UnprocessableEntity('Email already exists');
            }
            const newUser = {
                id: MOCK_USERS.length + 1,
                email: userData.email,
                password: userData.password,
                name: (_a = userData.name) !== null && _a !== void 0 ? _a : 'New User'
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
        }
        catch (error) {
            console.error('Registration error:', error);
            if (error.statusCode) {
                throw error;
            }
            throw new rest_1.HttpErrors.InternalServerError('Registration failed: ' + error.message);
        }
    }
}
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, rest_1.post)('/login'),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        description: 'User credentials',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    required: ['email', 'password'],
                    properties: {
                        email: { type: 'string', format: 'email' },
                        password: { type: 'string', minLength: 1 },
                    },
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, rest_1.post)('/register'),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        description: 'User registration data',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    required: ['email', 'password'],
                    properties: {
                        email: { type: 'string', format: 'email' },
                        password: { type: 'string', minLength: 1 },
                        name: { type: 'string' },
                    },
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
//# sourceMappingURL=auth.controller.js.map