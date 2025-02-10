import { Component } from '@angular/core';
import { GuardianSideBarComponent } from '../../guardian-side-bar/guardian-side-bar.component';
import { FormsModule } from '@angular/forms';
import { InmateModel } from '../../../models/inmate-model';
import { HttpService } from '../../../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medical-inmates',
  standalone: true,
  imports: [GuardianSideBarComponent,FormsModule],
  templateUrl: './add-medical-inmates.component.html',
  styleUrl: './add-medical-inmates.component.css'
})
export class AddMedicalInmatesComponent 
{

  resident: InmateModel = new InmateModel();
  validationMessage: any;
  constructor(private httpservice: HttpService,private router: Router)
  {

  }
   registerInmates()
   {
    this.validationMessage={};
    this.httpservice.postdata("",this.resident).subscribe((item:any)=>
    {
      console.log(item)
    }
    )
   }

}
