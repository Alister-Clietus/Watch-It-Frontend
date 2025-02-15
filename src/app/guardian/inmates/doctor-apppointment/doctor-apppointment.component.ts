import { Component } from '@angular/core';
import { GuardianSideBarComponent } from '../../guardian-side-bar/guardian-side-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoctorAppointment } from '../../../models/doctor-appointment';
import Swal from 'sweetalert2';
import { HttpService } from '../../../service/http.service';
import { Router } from '@angular/router';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-doctor-apppointment',
  standalone: true,
  imports: [GuardianSideBarComponent,FormsModule,CommonModule],
  templateUrl: './doctor-apppointment.component.html',
  styleUrl: './doctor-apppointment.component.css'
})
export class DoctorApppointmentComponent 
{
  userDatatable: any;
  validationMessage: any;
  doc_appointment:DoctorAppointment=new DoctorAppointment();

  ngOnInit() {
    console.log("Resident Object Initialized:", this.doc_appointment);
    this.validationMessage = {};
    this.getDocotorsAppointment()
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
            this.userDatatable.draw()
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


       getDocotorsAppointment() 
       {
         this.userDatatable = $('#doctorappointmentlist').DataTable({
           "bProcessing": false,
           "bDeferRender": true,
           "ordering": true,
           "bAutoWidth": false,
           "bServerSide": true,
           "sAjaxSource": "http://127.0.0.1:8099/api/guardian/getall-doctors-appointment/search",
           "iDisplayStart": 0,
           "iDisplayLength": 5,
           "aLengthMenu": [[5, 10, 25, 50, 100], [5, 10, 25, 50, 100]],
           // "sPaginationType": "full_numbers",
           "searching": false,  // Hides the search bar
     
           "paging": true,
           "scrollX": true,  // Enables horizontal scrolling
           "scrollY": "500px",  // Limits height to 1000px and makes content scrollable
           "scrollCollapse": true,  // Prevents extra empty space
     "fnServerParams": (aoData: { name: string; value: string; }[]) => {
       var datastring = "" // 'this' now correctly refers to the class instance
       console.log(datastring);
       aoData.push({ name: "searchParam", value: datastring });
     },
     
           
           "fnServerData": (sSource: any, aoData: any, fnCallback: (arg0: any) => void, oSettings: { jqXHR: any; }) => {
             oSettings.jqXHR = $.ajax({
               "dataType": 'json',
               "type": "GET",
               "url": sSource,
               "data": aoData,
               "success": (data: { countByStatus: any; countByType: any; }) => {
                 fnCallback(data);
               },
               "error": (e: { status: string; }) => {
                 if (e.status == "403" || e.status == "401") {
                 }
               }
             });
             
           },
           
           
           "createdRow": (row: Node, data: any[] | object, dataIndex: number) => {
             $(row).css({
               "height": "60px",  // Adjust row height
               "white-space": "nowrap" // Prevents text from wrapping
             });
             
           },
         
     "aoColumns": [
       { "mDataProp": "patientName", "bSortable": true, },
       { "mDataProp": "doctorName", "bSortable": true,},
       { "mDataProp": "appointmentTime", "bSortable": false,},
       { "mDataProp": "AppointmentDate", "bSortable": true,},
     ]
     });
         
     }

}
