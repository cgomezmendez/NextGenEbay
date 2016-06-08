import { Component} from '@angular/core';
import { LoginService } from './login.service'
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {CORE_DIRECTIVES} from '@angular/common';
import {AlertComponent} from 'ng2-bootstrap';
import { RouteParams, Router } from '@angular/router-deprecated';



@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/login.component.html',
    styleUrls: ['app/login.component.css'],
    providers: [LoginService, HTTP_PROVIDERS],
    directives: [AlertComponent, CORE_DIRECTIVES]
})


export class LoginComponent {
    vm = this;
    username  = "";
    password = "";
    loginError = "";

    constructor (private loginService: LoginService) {

    }

    ngOnInit() {

    }

    onSubmit() {
        this.login();
    };

    login() {
        var vm = this.vm;
        vm.loginService.login('cristian.g', 'elcj2304')
            .map(function(success: boolean){
                vm.loginError = "Error en el login";
                console.log('Inside '+ success);
                if (success == true) {
                    vm.loginError = "";
                    this.router.navigate('')

                } else {
                    vm.loginError = "Bad credentials";
                }
            })
            .subscribe();
    }
}