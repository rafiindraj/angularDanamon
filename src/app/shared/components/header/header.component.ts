import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  doLogin : any
  isList: number = 0
  isMenu: boolean = false;
  isSearch: boolean = false;
  constructor(private route : Router) {}
  ngOnInit(): void {
    // this. openModal(true)
    if( localStorage.getItem("Login")!=null ){
      this.doLogin = false
    }
    else {
      this.doLogin = true
    }
  }
  showModal = false;
  cartPage(){
    this.route.navigateByUrl('/cart');
  }
}
