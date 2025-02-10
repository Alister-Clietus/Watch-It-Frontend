import { Component } from '@angular/core';
import { GuardianSideBarComponent } from '../guardian-side-bar/guardian-side-bar.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [GuardianSideBarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})

export class SettingsComponent 
{

}
