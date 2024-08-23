import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Add CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];

  constructor(private router: Router) {}

  login() {
    const user = this.users.find(
      (user) => user.email === this.email && user.password === this.password
    );

    if (user) {
      this.router.navigate(['/account']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}

