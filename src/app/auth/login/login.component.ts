import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
  constructor(private router: Router)
  {

  }

  username: string = '';
  password: string = '';

  login() 
  {
    if (this.username === 'admin' && this.password === 'admin123') {
      alert('Login successful!');
      this.router.navigate(['./guardian/dashboard']); // ✅ Redirects to Dashboard
    } else {
      this.router.navigate(['./guardian/dashboard']);
    }
  }

}
