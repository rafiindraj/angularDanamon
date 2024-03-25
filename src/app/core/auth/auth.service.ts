import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userList : any = localStorage.getItem('users') || []
  constructor() {}

  isAdmin(): boolean {
    let user = JSON.parse(this.userList) ;
    return user && user.role === 'admin';
  }

  login(username: string, password: string): boolean {
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('username', username);
    return true;
  }

  logout(): void {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('username');
  }
}
