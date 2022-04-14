import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  gotoHome() {
    this.router.navigate(['/home']);
  }
  gotoLogin() {
    console.log("clicked login button");
    this.router.navigate(['/login']);
  }
  gotoMain() {
    this.router.navigate(['/']);
  }
  gotoCatalog() {
    this.router.navigate(['/catalog']);
  }
  ngOnInit(): void {
  }

}
