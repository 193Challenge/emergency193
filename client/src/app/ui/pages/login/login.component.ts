import { Component, OnInit, Injectable } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { UserDefaults } from '~/app/model/user-defaults';
import { UserDTO } from '~/app/repository/dto/user-dto';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '~/environments/environment';
import { UserViewModelConverter } from '~/app/repository/converter/user.view-model-converter';
import { map } from 'rxjs/operators'
import { HttpClient } from 'selenium-webdriver/http';
import { User } from '~/app/model/user';

const URL = `${environment.apiUrl}/user`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private localStorage = require( "nativescript-localstorage" );

  constructor(page: Page, private router: RouterExtensions) { 
    page.actionBarHidden = true;
  }

  public cpf: string;
  public name: string;

  ngOnInit() {
  }

  public onCPFChange(arg) {
    this.cpf = arg.object.text;
  }

  public onNameChange(arg) {
    this.name = arg.object.text;
  }

  public login() {
    console.log("Current user location: " +  this.cpf + ", " + this.name);
    if (!!this.cpf && !!this.name) {
      this.router.navigate(['operation-list'])
    }
    let createdUser = new User(1212,  "Jayme", true);
    const jsonUser = JSON.stringify(createdUser);
    localStorage.setItem(UserDefaults.userInfo, jsonUser)
  }

}
