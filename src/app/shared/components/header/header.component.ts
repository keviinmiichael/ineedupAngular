import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/login.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { apiUrl } from '../../../environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  protected apiUrl = apiUrl;
  protected user: User | null;

  constructor(private _authService: AuthService) {
    this.user = null;
  }

  ngOnInit(): void {
    this._authService.user.subscribe((user) => (this.user = user));
  }
}
