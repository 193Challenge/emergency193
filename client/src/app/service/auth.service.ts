import { Injectable } from '@angular/core';
import { AuthRepository } from '../repository/auth.repository';
import { User } from '../model/user';
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class AuthService {

    constructor(private repository: AuthRepository, private router: RouterExtensions) {
    }

    public getLoggedUser(): User {
        const loggedUser = this.repository.getLoggedUser();
        console.log("TEST")
        if (!loggedUser) {
            this.router.navigateByUrl('/login');
            return null;
        }
        return loggedUser;
    }

    public logout(): void {
        this.repository.logout();
    }
}
