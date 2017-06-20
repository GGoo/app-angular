import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string = '/profil';

    constructor(private router: Router) { }

    ngOnInit() {
        this.model.username = '';
        this.model.password = '';
    }
    login() {
        this.router.navigate([this.returnUrl]);
    }

}
