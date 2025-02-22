import { Component } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})

export class AdminSidebarComponent 

{

constructor(private httpservice: HttpService,private router: Router){}

adminLanding() 
{

  this.router.navigate(['./admin/admin-landing']);
}

AddAdminDetails() 
{

  this.router.navigate(['./admin/add-admin-details']);
}

DBSettings() 
{
  this.router.navigate(['./admin/db-settings']);
}

Settings() 
{
  this.router.navigate(['./admin/settings']);
}

logout()
{
  this.router.navigate(['./login']);
}

}
