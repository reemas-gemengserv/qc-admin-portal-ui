import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  //let password: string;
  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value.userName);
    console.log(loginForm.value.password);

    this.loginService.login(loginForm.value.userName, loginForm.value.password);
  }

  ngOnInit() {

  }

  OtpModal() {
    $('.ui.tiny.modal').modal('show');

  }


}
