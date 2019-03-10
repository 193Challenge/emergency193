import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { UserViewModelConverter } from './converter/user.view-model-converter';
import { UserDefaults } from '../model/user-defaults';
const USER_KEY = 'user';

@Injectable()
export class AuthRepository {

    private localStorage = require( "nativescript-localstorage" );

    constructor() {
    }

    public getLoggedUser(): User {
        let userData = this.localStorage.getItem(UserDefaults.userInfo) 
        if (!userData) {
            return null;
        }
        const userObject = JSON.parse(userData);
        return UserViewModelConverter.fromDTO(userObject);
    }

    public logout(): void {
        this.localStorage.setItem(UserDefaults.userInfo, null) 
    }
}
