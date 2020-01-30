import AuthService from "./AuthService";

class FirebaseAuthService implements AuthService {
    public authenticate(user: string, password: string): boolean {
        return false
    }
    public getAuthToken(): string {
        return "nup"
    }
}

export default FirebaseAuthService;
