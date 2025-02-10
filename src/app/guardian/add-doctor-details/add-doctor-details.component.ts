import { Component } from '@angular/core';
import { GuardianSideBarComponent } from '../guardian-side-bar/guardian-side-bar.component';
import { Doctor } from '../../models/doctor';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-doctor-details',
  standalone: true,
  imports: [GuardianSideBarComponent,FormsModule],
  templateUrl: './add-doctor-details.component.html',
  styleUrl: './add-doctor-details.component.css'
})
export class AddDoctorDetailsComponent {

  doctorDto: Doctor = new Doctor();

  validationMessage: any;

  ngOnInit() {
    console.log("Resident Object Initialized:", this.doctorDto);
    this.validationMessage = {};
  }

  constructor(private httpservice: HttpService,private router: Router){}

    //Registration Doctor function Starts Here
     registerInmates(){
      this.validationMessage={};
      console.log(this.doctorDto)
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
