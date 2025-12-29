import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  showToast = false;

  constructor(private readonly router: Router) {}

  async login() {
    this.error = '';
    this.showToast = false;
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.email, password: this.password })
      });
      if (res.ok) {
        this.router.navigate(['/dashboard']);
      } else {
        const data = await res.json();
        this.error = data.message || 'User is not valid or incorrect credentials';
        this.showToast = true;
        setTimeout(() => this.showToast = false, 3000);
      }
    } catch (e) {
      this.error = 'Server error. Please try again later.';
      this.showToast = true;
      setTimeout(() => this.showToast = false, 3000);
    }
  }

  goToCreateUser() {
    this.router.navigate(['/create-user']);
  }
}
