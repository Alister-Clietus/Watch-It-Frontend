import { Component } from '@angular/core';
import { DoctorSidebarComponent } from '../doctor-sidebar/doctor-sidebar.component';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { InmatesMedicalDetails } from '../../models/inmates-medical-details';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inmates-medical-details',
  standalone: true,
  imports: [DoctorSidebarComponent,CommonModule,FormsModule],
  templateUrl: './inmates-medical-details.component.html',
  styleUrl: './inmates-medical-details.component.css'
})
export class InmatesMedicalDetailsComponent 
{
  residents: InmatesMedicalDetails[] = [];

  constructor(private httpservice: HttpService,private router: Router) {}

  ngOnInit() {
    this.fetchResidents();
  }

  fetchResidents() {
    this.httpservice.getDataUsingUrl("http://127.0.0.1:8099/api/resident/get-residents-id").subscribe((response:any) => {
      this.residents = response.aaData.map((r: any) => ({
        id: r.id,
        firstName: r.firstName,
        lastName: r.lastName,
        bloodPressure: '',
        sugarLevel: r.sugarLevel || '',
        cholesterol: r.cholesterol || '',
        isAbleToWalk: r.isAbleToWalk === 'yes'
      }));
    });
  }

  sendData(resident: InmatesMedicalDetails) 
  {
    console.log(resident)
    this.httpservice.updatedata("http://127.0.0.1:8099/api/resident/update-healthdetails",resident).subscribe((response:any) => 
    {
      if(response.code.toLowerCase()=="success"){
        //Toaster for Data Send Successfully
        Swal.fire({
          title: "Success!",
          text: "Resident registered successfully!",
          icon: "success",
          confirmButtonColor: "#28a745",
        });
      }
      else{
        // Toaster showing error
        Swal.fire({
          title: "Error!",
          text: "An error occurred while registering.",
          icon: "error",
          confirmButtonColor: "#dc3545",
        });

      }    
    }); //End of Subscribe
  }

}
