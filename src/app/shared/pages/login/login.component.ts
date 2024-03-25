import { AuthService } from './../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatIconModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;
  isLogin: boolean = false;
  hidePassword = true;
  userList : any
  constructor(private router: Router, private authService : AuthService){
    this.userList = localStorage.getItem('users')
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  isAdmin(): boolean {
    debugger
    const user = JSON.parse(this.userList);
    return user && user.role === 'admin';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const registeredUsers = this.getRegisteredUsers();
      const userExists = registeredUsers.some((user:any) => user.username === this.loginForm.value.username);
      const findUser = registeredUsers.find((user:any) => user.username === this.loginForm.value.username);
    
      if (userExists) {
        debugger
        const loginSuccess = this.authService.login(this.loginForm.value.username, this.loginForm.value.password );
        if (loginSuccess) {
          if(findUser.role === 'admin'){
            this.router.navigate(['/admin']);
          } else{
            this.router.navigate(['/user']);
          }
       
        } else {
          // Show an error message
        }
      } else {
        alert('Username does not exist. Please register.');
      }
    }
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  getRegisteredUsers() {
    return JSON.parse(this.userList) || [];
  }
}
