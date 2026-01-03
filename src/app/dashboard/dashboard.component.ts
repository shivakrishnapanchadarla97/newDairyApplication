import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  ownerName = 'Shiva Dairy';
  userName = 'Owner Name';

  constructor(private readonly router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
