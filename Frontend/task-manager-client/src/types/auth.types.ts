
export interface registerInput {
    username: string,
    email: string,
    password: string
}

export interface LoginInterface {
    email: string,
    password: string
}

// response payloads
export interface AuthUser {
    id: string;
    username: string;
    email: string;
}

export interface AuthResponse {
    message: string;
    user: AuthUser;
}