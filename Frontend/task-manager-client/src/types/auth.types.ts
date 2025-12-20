
export interface registerInput {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface LoginInterface {
    email: string,
    password: string
}

// response payloads
export interface AuthUser {
    userId: string;
    username: string;
    email: string;
}

export interface AuthResponse {
    message: string;
    user: AuthUser;
}

export interface PopulateUsers {
    message: string;
    count: number;
    users: {
        _id: string;
        username: string;
        email: string;
    }
}