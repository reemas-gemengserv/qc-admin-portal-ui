import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private _http: HttpClient, private router: Router) { }

  login(userName, password) {
    console.log("login check being processed");
    // var apiUrl = "" + userName + "&password=" + password;
    // this._http.get(apiUrl).subscribe(data => {

    //   console.log("this is our login api data ", data);

    //   if (data.hasOwnProperty("session_key")) {
    //     this.router.navigate(['']);
    //   }
    //   else {
    //     this.router.navigate(['/login']);
    //   }

    // });


    if (userName == "reema" && password == "reema@123") {
      // console.log("routing to add project");
      // this.router.navigate(['/addProject']);
    }
    else {
      console.log("routing to login page itself");

    }
  }
}
