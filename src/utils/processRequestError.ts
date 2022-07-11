import {AuthService} from "@/services/auth";
import {routePaths} from "@/routes";

export function processRequestError(errorData: {
    error: any,
    status: number,
}, checkUnauthorized: boolean = true) {

    if (checkUnauthorized && errorData.error && errorData.status === 401) {
        const authService = new AuthService();
        authService.removeToken();
        alert("Your session has been expired! Login again!");

        setTimeout(() => {
            window.location.href = routePaths.public.login;
        }, 1300);
        return;
    }

    if(errorData.error) {
        alert("Something went wrong! Check your connection!");
        return;
    }
}