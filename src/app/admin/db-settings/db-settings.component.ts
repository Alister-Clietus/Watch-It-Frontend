import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-db-settings',
  standalone: true,
  imports: [AdminSidebarComponent],
  templateUrl: './db-settings.component.html',
  styleUrl: './db-settings.component.css'
})
export class DBSettingsComponent 
{

    constructor(private httpservice: HttpService,private router: Router){}

    clearLoginDatabase() {
      Swal.fire({
        title: "Check",
        text: "Do you want to Continue?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.httpservice.getDataUsingUrl("http://localhost:8099/api/guardian/clear-all-login")
            .subscribe((item: any) => {
              if (item.code.toLowerCase() == "success") {
                Swal.fire({
                  title: "Success!",
                  text: "Resident registered successfully!",
                  icon: "success",
                  confirmButtonColor: "#28a745",
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "An error occurred while registering.",
                  icon: "error",
                  confirmButtonColor: "#dc3545",
                });
              }
            }, error => {
              Swal.fire({
                title: "Error!",
                text: "An error occurred in API Connection.",
                icon: "error",
                confirmButtonColor: "#dc3545",
              });

              if (error.status == "400") {
                let msg = "";
                error.error.details.forEach((element: string) => {
                  msg += element + "<br>";
                });
              }
            });
        }
      });
    }


    clearDoctorsDatabase() {
      Swal.fire({
        title: "Check",
        text: "Do you want to Continue?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.httpservice.getDataUsingUrl("http://localhost:8099/api/guardian/clear-doctors-db")
            .subscribe((item: any) => {
              if (item.code.toLowerCase() == "success") {
                Swal.fire({
                  title: "Success!",
                  text: "Resident registered successfully!",
                  icon: "success",
                  confirmButtonColor: "#28a745",
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "An error occurred while registering.",
                  icon: "error",
                  confirmButtonColor: "#dc3545",
                });
              }
            }, error => {
              Swal.fire({
                title: "Error!",
                text: "An error occurred in API Connection.",
                icon: "error",
                confirmButtonColor: "#dc3545",
              });

              if (error.status == "400") {
                let msg = "";
                error.error.details.forEach((element: string) => {
                  msg += element + "<br>";
                });
              }
            });
        }
      });
    }

    clearGuradiansDatabase() {
      Swal.fire({
        title: "Check",
        text: "Do you want to Continue?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.httpservice.getDataUsingUrl("http://localhost:8099/api/guardian/clear-all-guardian")
            .subscribe((item: any) => {
              if (item.code.toLowerCase() == "success") {
                Swal.fire({
                  title: "Success!",
                  text: "Resident registered successfully!",
                  icon: "success",
                  confirmButtonColor: "#28a745",
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "An error occurred while registering.",
                  icon: "error",
                  confirmButtonColor: "#dc3545",
                });
              }
            }, error => {
              Swal.fire({
                title: "Error!",
                text: "An error occurred in API Connection.",
                icon: "error",
                confirmButtonColor: "#dc3545",
              });

              if (error.status == "400") {
                let msg = "";
                error.error.details.forEach((element: string) => {
                  msg += element + "<br>";
                });
              }
            });
        }
      });
    }

    clearPatientsDatabase() {
      Swal.fire({
        title: "Check",
        text: "Do you want to Continue?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.httpservice.getDataUsingUrl("http://localhost:8099/api/guardian/clear-patients-db")
            .subscribe((item: any) => {
              if (item.code.toLowerCase() == "success") {
                Swal.fire({
                  title: "Success!",
                  text: "Resident registered successfully!",
                  icon: "success",
                  confirmButtonColor: "#28a745",
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "An error occurred while registering.",
                  icon: "error",
                  confirmButtonColor: "#dc3545",
                });
              }
            }, error => {
              Swal.fire({
                title: "Error!",
                text: "An error occurred in API Connection.",
                icon: "error",
                confirmButtonColor: "#dc3545",
              });

              if (error.status == "400") {
                let msg = "";
                error.error.details.forEach((element: string) => {
                  msg += element + "<br>";
                });
              }
            });
        }
      });
    }

    clearDoctosAppointments() {
      Swal.fire({
        title: "Check",
        text: "Do you want to Continue?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.httpservice.getDataUsingUrl("http://localhost:8099/api/guardian/clear-all-appointments")
            .subscribe((item: any) => {
              if (item.code.toLowerCase() == "success") {
                Swal.fire({
                  title: "Success!",
                  text: "Resident registered successfully!",
                  icon: "success",
                  confirmButtonColor: "#28a745",
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "An error occurred while registering.",
                  icon: "error",
                  confirmButtonColor: "#dc3545",
                });
              }
            }, error => {
              Swal.fire({
                title: "Error!",
                text: "An error occurred in API Connection.",
                icon: "error",
                confirmButtonColor: "#dc3545",
              });

              if (error.status == "400") {
                let msg = "";
                error.error.details.forEach((element: string) => {
                  msg += element + "<br>";
                });
              }
            });
        }
      });
    }

}
