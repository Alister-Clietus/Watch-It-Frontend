import { Component } from '@angular/core';
import { GuardianSideBarComponent } from '../../guardian-side-bar/guardian-side-bar.component';

@Component({
  selector: 'app-verify-inmates',
  standalone: true,
  imports: [GuardianSideBarComponent],
  templateUrl: './verify-inmates.component.html',
  styleUrl: './verify-inmates.component.css'
})
export class VerifyInmatesComponent {

}
