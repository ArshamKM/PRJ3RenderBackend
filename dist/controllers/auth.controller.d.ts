import { TokenService } from '@loopback/authentication';
interface Credentials {
    email: string;
    password: string;
}
export declare class AuthController {
    jwtService: TokenService;
    constructor();
    login(credentials: Credentials): Promise<{
        token: string;
        user: {
            id: number;
            email: string;
            name: string;
        };
    }>;
    register(userData: {
        email: string;
        password: string;
        name?: string;
    }): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            name: string;
        };
    }>;
}
export {};
