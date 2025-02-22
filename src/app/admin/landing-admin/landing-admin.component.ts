import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { HttpService } from '../../service/http.service';
import { GuardianModel } from '../../models/guardian-model';
import { FormsModule } from '@angular/forms';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-landing-admin',
  standalone: true,
  imports: [AdminSidebarComponent,FormsModule],
  templateUrl: './landing-admin.component.html',
  styleUrl: './landing-admin.component.css'
})
export class LandingAdminComponent 
{
  constructor(private httpserve: HttpService) { }
  
    selectedFilterGuardian: any;
    searchQueryGuardian: any;
    selectedFilterDoctor: any;
    searchQueryDoctor: any;
    static obj: LandingAdminComponent;
    totalInmates: number = 150; // Example count
    inmatesCantWalk: number = 30;
    upcomingCheckups: number = 5;
    inmatesWithDiseases: number = 20;
    sleepCycleData: any;
    sleepCycleOptions: any;
    line: any;
    residents: GuardianModel[] = [];
    userDatatable: any;
    userDatatableDoctor: any;
  
    getresultdoctor() {
      this.userDatatableDoctor.draw()
    }
  
    cleardoctor() {
      this.selectedFilterDoctor = "";
      this.searchQueryDoctor = "";
      this.userDatatable.draw()
    }
  
    clearGuardian() {
      this.selectedFilterGuardian = "";
      this.searchQueryGuardian = "";
      this.userDatatable.draw()
    }
  
    getresult() {
      this.userDatatable.draw()
    }
  
    ngOnInit(): void {
      LandingAdminComponent.obj = this;
      this.getUsersGuardian()  
    }
  
    getSearchInputsGuardian() {
      console.log("this function got")
      let InmatesDto: GuardianModel = new GuardianModel(); // Create a new instance
      console.log("this function to make empty")
      // Reset all properties to empty strings
      Object.keys(InmatesDto).forEach((key) => {
        (InmatesDto as any)[key] = '';
      });
      console.log("this function to make check")
      // Assign the search value to the selected filter
      if (this.selectedFilterGuardian && this.searchQueryGuardian) {
  
        (InmatesDto as any)[this.selectedFilterGuardian] = this.searchQueryGuardian;
        console.log("Quesry is there")
        if (Object.values(InmatesDto).some(value => value !== '')) {
          console.log(JSON.stringify(InmatesDto))
          return JSON.stringify(InmatesDto);
        }
  
      }
      else {
        return "";
      }
      // Check if at least one property has a non-empty value
      return ""; // Return an empty string if all values are empty
    }
  

  
    getUsersGuardian() {
      this.userDatatable = $('#guardianlist').DataTable({
        "bProcessing": false,
        "bDeferRender": true,
        "ordering": true,
        "bAutoWidth": false,
        "bServerSide": true,
        "sAjaxSource": "http://127.0.0.1:8099/api/guardian/getall-admin/search",
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
          var datastring = this.getSearchInputsGuardian() // 'this' now correctly refers to the class instance
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
          { "mDataProp": "firstName", "bSortable": true, },
          { "mDataProp": "lastName", "bSortable": true, },
          { "mDataProp": "address", "bSortable": false, },
          { "mDataProp": "gender", "bSortable": true, },
          { "mDataProp": "phone", "bSortable": true, },
          { "mDataProp": "email", "bSortable": true, },
          { "mDataProp": "adhaarNumber", "bSortable": true, },
          { "mDataProp": "age", "bSortable": true, },
          { "mDataProp": "joinedDate", "bSortable": true, },
          { "mDataProp": "nativePlace", "bSortable": true, },
          { "mDataProp": "bloodGroup", "bSortable": true, },
          { "mDataProp": "panId", "bSortable": true, }
        ]
  
      });
  
    }
  

}
