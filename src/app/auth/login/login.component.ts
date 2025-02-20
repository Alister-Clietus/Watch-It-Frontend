import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../service/http.service';
import { LoginDTO } from '../../models/login-dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{

  ngOnInit() {
    this.validationMessage = {};
  }

signup() {
  this.router.navigate(['./signup/admin']);
}
constructor(private router: Router,private httpservice: HttpService){

  }

  username: string = '';
  password: string = '';
  validationMessage: any;
  logindto: LoginDTO=new LoginDTO();

  login() 
  {
    if (this.username === 'admin' && this.password === 'admin123') {
      alert('Login successful!');
      this.router.navigate(['./guardian/dashboard']); // ✅ Redirects to Dashboard
    } else {
      this.router.navigate(['./guardian/dashboard']);
    }
  }

        //Registration Inamtes function Starts Here
         logincheck(){
          this.validationMessage={};
          console.log(this.logindto)
          this.httpservice.postdata("http://localhost:8099/api/guardian/login",this.logindto).subscribe((item:any)=>{
            console.log(item.login)
            if(item.login=="fail")
              {
              Swal.fire({
                title: "Login Failed!",
                text: "Password or username is Wrong.",
                icon: "error",
                confirmButtonColor: "#dc3545",
              });
            }
            else if(item.login=="success" && item.role=="GUARDIAN")
              {
                Swal.fire({
                  title: "Success!",
                  text: "Login Successfully!",
                  icon: "success",
                  confirmButtonColor: "#28a745",
                });
                this.router.navigate(['./guardian/dashboard']); // ✅ Redirects to Dashboard
            }
            else if(item.login=="success" && item.role=="DOCTOR")
            {
              Swal.fire({
                title: "Success!",
                text: "Login Successfully!",
                icon: "success",
                confirmButtonColor: "#28a745",
              });
              this.router.navigate(['./doctor/appointments']); // ✅ Redirects to Dashboard
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
