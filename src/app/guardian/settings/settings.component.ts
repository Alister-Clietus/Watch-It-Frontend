import { Component,OnInit } from '@angular/core';
import { GuardianSideBarComponent } from '../guardian-side-bar/guardian-side-bar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [GuardianSideBarComponent,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})

export class SettingsComponent implements OnInit {
  activeTab = 'account';
  settingsForm: FormGroup = this.fb.group({
    // Initialize with empty group
  });  constructor(private fb: FormBuilder) {this.settingsForm = this.fb.group({});}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.settingsForm = this.fb.group({
      // Account
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      currentPassword: [''],
      newPassword: ['', [Validators.minLength(6)]],
      
      // Notifications
      emailNotifications: [true],
      pushNotifications: [true],
      
      // Other sections would be added here
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      // Here you would typically call your service to save settings
      console.log('Form submitted with:', this.settingsForm.value);
      
      // Show success message
      Swal.fire({
        title: 'Success!',
        text: 'Your changes have been saved.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
      });
    } else {
      // If form is invalid, show error message
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      
      // Mark all fields as touched to show errors
      this.markFormGroupTouched(this.settingsForm);
    }
  }

  resetForm(): void {
    this.settingsForm.reset();
    // Reset to initial values if needed
    this.initForm();
  }

  // Helper to mark all fields as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
