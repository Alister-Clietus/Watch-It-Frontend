import { Component } from '@angular/core';
import { SignupSidebarComponent } from '../signup-sidebar/signup-sidebar.component';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../../models/doctor';
import { HttpService } from '../../../service/http.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-doctor-details',
  standalone: true,
  imports: [SignupSidebarComponent,FormsModule,CommonModule],
  templateUrl: './add-doctor-details.component.html',
  styleUrl: './add-doctor-details.component.css'
})
export class AddDoctorDetailsComponent 
{
clear() 
{
this.doctorDto =new Doctor();
}
specializations: string[] = [
  'Cardiologist', 'Dermatologist', 'Neurologist', 'Oncologist', 
  'Pediatrician', 'Psychiatrist', 'Orthopedic Surgeon', 'ENT Specialist',
  'Gynecologist', 'Urologist', 'Endocrinologist', 'Gastroenterologist'
];
hospitalList: string[] = [
  "AIIMS, New Delhi",
  "Fortis Memorial Research Institute, Gurugram",
  "Apollo Hospitals, Chennai",
  "Narayana Health, Bengaluru",
  "Tata Memorial Hospital, Mumbai",
  "Christian Medical College (CMC), Vellore",
  "Medanta - The Medicity, Gurugram",
  "Max Super Speciality Hospital, New Delhi",
  "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
  "Lilavati Hospital and Research Centre, Mumbai",
  "Manipal Hospital, Bengaluru",
  "Sri Ramachandra Medical Centre, Chennai",
  "Jaslok Hospital, Mumbai",
  "Care Hospitals, Hyderabad",
  "Artemis Hospital, Gurugram",
  "Hinduja Hospital, Mumbai",
  "Ruby Hall Clinic, Pune",
  "Sankara Nethralaya, Chennai",
  "PGIMER, Chandigarh",
  "NIMS, Hyderabad",
  "KIMS Hospitals, Hyderabad",
  "S.L. Raheja Hospital, Mumbai",
  "Columbia Asia Referral Hospital, Bengaluru"
];




  doctorDto: Doctor = new Doctor();
  validationMessage: any;
  
    ngOnInit() 
    {
      console.log("Resident Object Initialized:", this.doctorDto);
      this.validationMessage = {};
    }

    login() 
    {
      this.router.navigate(['./login']);
    
    }
  
    constructor(private httpservice: HttpService,private router: Router){}
  
      //Registration Doctor function Starts Here
       registerInmates()
       {
        
        this.validationMessage={};
        console.log(this.doctorDto)
        this.doctorDto.role="DOCTOR"
        this.httpservice.postdata("http://localhost:8099/api/guardian/create-doctor",this.doctorDto).subscribe((item:any)=>{
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
