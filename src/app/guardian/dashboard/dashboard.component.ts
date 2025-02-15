import { Component, OnInit } from '@angular/core';
import { GuardianSideBarComponent } from '../guardian-side-bar/guardian-side-bar.component';
import { HttpService } from '../../service/http.service';
import { InmateModel } from '../../models/inmate-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GuardianSideBarComponent,CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit 
{
clear() 
{
  this.selectedFilter="";
  this.searchQuery="";
  this.userDatatable.draw()
}
getresult() 
{
this.userDatatable.draw()
}

selectedFilter: any;
searchQuery: any;

  ngOnInit(): void 
  {
    DashboardComponent.obj=this;
    this.getUsers()

  }

  static obj:DashboardComponent;
  totalInmates: number = 150; // Example count
  inmatesCantWalk: number = 30;
  upcomingCheckups: number = 5;
  inmatesWithDiseases: number = 20;
  sleepCycleData: any;
  sleepCycleOptions: any;
  line: any;
  residents: InmateModel[] = [];
  userDatatable: any;

  constructor(private httpserve: HttpService) {}

  getSearchInputs() 
  {
    console.log("this function got")
    let InmatesDto: InmateModel = new InmateModel(); // Create a new instance
    console.log("this function to make empty")
    // Reset all properties to empty strings
    Object.keys(InmatesDto).forEach((key) => {
      (InmatesDto as any)[key] = '';
    });
    console.log("this function to make check")
    // Assign the search value to the selected filter
    if (this.selectedFilter && this.searchQuery) 
    {
      
      (InmatesDto as any)[this.selectedFilter] = this.searchQuery;
      console.log("Quesry is there")
      if (Object.values(InmatesDto).some(value => value !== '')) {
        console.log(JSON.stringify(InmatesDto))
        return JSON.stringify(InmatesDto);
      }

    }
    else
    {
      return "";
    }
    // Check if at least one property has a non-empty value
    return ""; // Return an empty string if all values are empty
  }
  

  getUsers() 
  {
    this.userDatatable = $('#questionList').DataTable({
      "bProcessing": false,
      "bDeferRender": true,
      "ordering": true,
      "bAutoWidth": false,
      "bServerSide": true,
      "sAjaxSource": "http://127.0.0.1:8099/api/resident/all-residents",
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
  var datastring = this.getSearchInputs(); // 'this' now correctly refers to the class instance
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
        { "mDataProp": "id", "bSortable": true, "sTitle": "ID" },
        { "mDataProp": "firstName", "bSortable": true, "sTitle": "First Name" },
        { "mDataProp": "lastName", "bSortable": true, "sTitle": "Last Name" },
        { "mDataProp": "address", "bSortable": false, "sTitle": "Address" },
        { "mDataProp": "gender", "bSortable": true, "sTitle": "Gender" },
        { "mDataProp": "adhaarNumber", "bSortable": true, "sTitle": "Aadhaar Number" },
        { "mDataProp": "dateOfBirth", "bSortable": true, "sTitle": "DOB" },
        { "mDataProp": "joinedDate", "bSortable": true, "sTitle": "JD" },
        { "mDataProp": "birthPlace", "bSortable": true, "sTitle": "Birth Place" },
        { "mDataProp": "bloodGroup", "bSortable": true, "sTitle": "Blood Group" },
        { "mDataProp": "panId", "bSortable": true, "sTitle": "PAN ID" },
        { "mDataProp": "weight", "bSortable": true, "sTitle": "Weight (kg)" },
        { "mDataProp": "no_of_childrens", "bSortable": true, "sTitle": "No. of Children" },
        { "mDataProp": "nativePlace", "bSortable": true, "sTitle": "Native Place" },
        { "mDataProp": "guardian", "bSortable": true, "sTitle": "Guardian" },
        { "mDataProp": "height", "bSortable": true, "sTitle": "Height (cm)" }
      ]
    });
    
}

  

}



