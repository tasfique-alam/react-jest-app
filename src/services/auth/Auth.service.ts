type Callback = (() => void) | undefined;

export class AuthService {
    public __tokenKey: string = '__user_sk'; // User secret key

    public getToken(): string | null {
        let token: string | null = window.localStorage.getItem(this.__tokenKey);
        return token && token !== '' ? token : null;
    }

    public setToken(token: string, callback: Callback = undefined): void {
        window.localStorage.setItem(this.__tokenKey, token);

        if (callback && typeof callback === "function") {
            callback();
        }
    }

    public removeToken(callback: Callback = undefined): void {
        window.localStorage.removeItem(this.__tokenKey);

        if (callback && typeof callback === "function") {
            callback();
        }
    }

    public isLoggedIn(): boolean {
        return this.getToken() !== null;
    }

    public isLoggedOut(): boolean {
        return this.getToken() === null;
    }
}