import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
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
}
