import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  username = '';
  password = '';
  error = '';
  success = '';

  constructor(private readonly router: Router) {}

  async register() {
    this.error = '';
    this.success = '';
    if (!this.username || !this.password) {
      this.error = 'Username and password are required.';
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username, password: this.password })
      });
      if (res.ok) {
        this.success = 'User created successfully!';
        setTimeout(() => this.router.navigate(['/login']), 1000);
      } else {
        const data = await res.json();
        this.error = data.message || 'Registration failed.';
      }
    } catch (e) {
      this.error = 'Server error.';
    }
  }
}
