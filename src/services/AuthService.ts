
interface AuthService {
    authenticate(user: string, password: string): boolean,
    getAuthToken(): string,
}

export default AuthService;
