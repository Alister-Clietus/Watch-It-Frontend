import { Component } from '@angular/core';
import { GuardianSideBarComponent } from '../../guardian-side-bar/guardian-side-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoctorAppointment } from '../../../models/doctor-appointment';
import Swal from 'sweetalert2';
import { HttpService } from '../../../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-apppointment',
  standalone: true,
  imports: [GuardianSideBarComponent,FormsModule,CommonModule],
  templateUrl: './doctor-apppointment.component.html',
  styleUrl: './doctor-apppointment.component.css'
})
export class DoctorApppointmentComponent 
{
  validationMessage: any;
  doc_appointment:DoctorAppointment=new DoctorAppointment();

  ngOnInit() {
    console.log("Resident Object Initialized:", this.doc_appointment);
    this.validationMessage = {};
  }

  constructor(private httpservice: HttpService,private router: Router){}

  appointment = { name: '', date: '', time: '', doctor: '' };
  appointments: any[] = [
    { name: 'John Doe', date: '2025-02-10', time: '10:00 AM', doctor: 'Dr. Smith' },
    { name: 'Jane Smith', date: '2025-02-12', time: '2:30 PM', doctor: 'Dr. Johnson' },
    { name: 'Alice Brown', date: '2025-02-14', time: '11:15 AM', doctor: 'Dr. Williams' },
    { name: 'Michael White', date: '2025-02-16', time: '3:45 PM', doctor: 'Dr. Brown' },
    { name: 'Alice Brown', date: '2025-02-14', time: '11:15 AM', doctor: 'Dr. Williams' },
    // { name: 'Michael White', date: '2025-02-16', time: '3:45 PM', doctor: 'Dr. Brown' }
  ];
  doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown']; // Sample doctors



  deleteAppointment(apt: any) {
    this.appointments = this.appointments.filter(a => a !== apt);
  }

      //Registration Doctor function Starts Here
      registerDoctorAppointment(){
        this.validationMessage={};
        console.log(this.doc_appointment)
        this.httpservice.postdata("http://localhost:8099/api/guardian/doctor-appointment",this.doc_appointment).subscribe((item:any)=>{
          if(item.code.toLowerCase()=="success"){
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
          if(item.details)
          {
            // validation error toaster
    
            item.details.forEach((element: { [x: string]: any; })  => 
              {
              var key=Object.keys(element)[0];
              this.validationMessage[key]=element[key];
              });
    
              Swal.fire({
                title: "Validation Errors",
                text: "Validation Error Occured",
                icon: "warning",
                confirmButtonColor: "#ff9800",
              });
    
          }
        },error=>
        {
          Swal.fire({
            title: "Error!",
            text: "An error occurred in API Connection.",
            icon: "error",
            confirmButtonColor: "#dc3545",
          });
    
          if(error.status=="400")
          {
            let msg="";
            error.error.details.forEach((element: string)=>
            {
              msg = msg + element + "<br>"
            }
            );
          }
        }
        ) //Subscribe Ends Here
       } //Register Doctor Function Ends Here

}
