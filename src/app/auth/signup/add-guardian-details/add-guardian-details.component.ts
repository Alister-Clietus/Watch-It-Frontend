import { Component } from '@angular/core';
import { SignupSidebarComponent } from '../signup-sidebar/signup-sidebar.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GuardianModel } from '../../../models/guardian-model';
import { HttpService } from '../../../service/http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-guardian-details',
  standalone: true,
  imports: [SignupSidebarComponent,FormsModule],
  templateUrl: './add-guardian-details.component.html',
  styleUrl: './add-guardian-details.component.css'
})
export class AddGuardianDetailsComponent 
{
verifypassword: any;
  clearForm() 
  {
  throw new Error('Method not implemented.');
  }
    guardianModel: GuardianModel=new GuardianModel();
    
    validationMessage: any;

    login() 
    {
      this.router.navigate(['./login']);
    
    }
  
    ngOnInit()
    {
      console.log("Resident Object Initialized:", this.guardianModel);
      this.validationMessage = {};
    }
  
    constructor(private httpservice: HttpService,private router: Router){}
  
      //Registration Inamtes function Starts Here
       registerGuardian(){
        if(this.verifypassword!=this.guardianModel.password)
        {
          Swal.fire({
            title: "Error!",
            text: "Password Dosen't Match.",
            icon: "error",
            confirmButtonColor: "#dc3545",
          });
        }
        this.validationMessage={};
        console.log(this.guardianModel)
        this.guardianModel.role="GUARDIAN"
        this.httpservice.postdata("http://localhost:8099/api/guardian/create-guardian",this.guardianModel).subscribe((item:any)=>{
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
       } //Register Inmates Function Ends Here
  

}
