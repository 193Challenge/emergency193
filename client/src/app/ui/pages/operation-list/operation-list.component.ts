import { Component, OnInit } from '@angular/core';
import { AuthService } from '~/app/service/auth.service';
import { UserDefaults } from '~/app/model/user-defaults';
import { UserViewModelConverter } from '~/app/repository/converter/user.view-model-converter';
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { User } from '~/app/model/user';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {
  private localStorage = require( "nativescript-localstorage" );
  public user = null;

  constructor(private router: RouterExtensions) {     
    this.user = this.getLoggedUser();
  }

  ngOnInit() {
  }

  public getLoggedUser(): User {
    let userData = this.localStorage.getItem(UserDefaults.userInfo) 
    if (!userData) {
      this.router.navigate(['login']);
        return null;
    }
    const userObject = JSON.parse(userData);
    return UserViewModelConverter.fromDTO(userObject);
}

  public accident() {
    this.router.navigate(['operation-question']);
  }

}
