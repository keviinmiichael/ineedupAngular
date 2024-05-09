import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ineedup';

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._checkAndSetUser();
  }

  private _checkAndSetUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this._authService.setUser(JSON.parse(user));
    }
  }
}
