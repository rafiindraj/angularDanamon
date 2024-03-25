import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatIconModule, MatFormFieldModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  users : any = []
  registerForm: FormGroup
  submitted: boolean = false;
  hidePassword = true;
  userList : any
  constructor(private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    debugger
    if (this.registerForm.valid) {
      debugger
      this.userList = localStorage.getItem('users')
      const registeredUsers = JSON.parse(this.userList) || [];
      const isDuplicate = registeredUsers.some((user:any) => user.username === this.registerForm.value.username);
      if (isDuplicate) {
        // Handle the duplicate case, e.g., show an error message
        alert('A user with this username already exists. Please choose a different username.');
      } else {
        // Proceed with registration
        const newUser = {
          id: this.generateId(),
          ...this.registerForm.value
        };
        registeredUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(registeredUsers));
        this.registerUser()
        // Navigate to login or other appropriate action
      }
    }
  }

  generateId(): string {
    return (this.users.length + 1).toString();
  }

  registerUser() {
    this.router.navigate(['/']);
  }

  navigateToLogin(){
    this.router.navigate(['/']);
  }
}
