import { Component } from '@angular/core';
import { GuardianSideBarComponent } from '../../guardian-side-bar/guardian-side-bar.component';

@Component({
  selector: 'app-update-inmates',
  standalone: true,
  imports: [GuardianSideBarComponent],
  templateUrl: './update-inmates.component.html',
  styleUrl: './update-inmates.component.css'
})
export class UpdateInmatesComponent {

}
