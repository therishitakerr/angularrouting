import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
