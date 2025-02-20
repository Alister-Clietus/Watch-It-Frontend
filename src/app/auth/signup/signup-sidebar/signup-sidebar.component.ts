import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-sidebar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup-sidebar.component.html',
  styleUrl: './signup-sidebar.component.css'
})
export class SignupSidebarComponent {
adminSignup() {
  this.router.navigate(['./signup/admin']);
}
inmateSignup() {
  this.router.navigate(['./signup/sidebar']);
}
doctorSignup() {
  this.router.navigate(['./signup/doctor']);
}
guardianSignup() {
  this.router.navigate(['./signup/guardian']);
}



  isSidebarOpen: boolean = false;

  constructor(private router: Router) { }
    
  ngOnInit(): void 
  {

  }
  toggleSidebar() 
  {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
