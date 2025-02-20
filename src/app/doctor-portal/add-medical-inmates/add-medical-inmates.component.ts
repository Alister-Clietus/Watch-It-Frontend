import { Component } from '@angular/core';
import { DoctorSidebarComponent } from '../doctor-sidebar/doctor-sidebar.component';
import { InmatesMedicalRecords } from '../../models/inmates-medical-records';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-medical-inmates',
  standalone: true,
  imports: [DoctorSidebarComponent,CommonModule],
  templateUrl: './add-medical-inmates.component.html',
  styleUrl: './add-medical-inmates.component.css'
})
export class AddMedicalInmatesComponent {

anyArray: any[] = [];

  reports: InmatesMedicalRecords[] = []; // Define as an array

  selectedFile: File | null = null;
  selectedReport: any = null;
  selectedReportType: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchReports();
  }

  fetchReports() {
    this.http.get<any>('http://127.0.0.1:8099/api/guardian/get-inpatients/pdf')
      .subscribe({
        next: (response) => {
          this.anyArray = response.aaData
          console.log(this.anyArray)
        },
        error: (err) => {
          console.error('Error fetching reports:', err);
          alert('Failed to fetch reports. Please try again later.');
        }
      });
  }

  downloadReport(fileName: string) {
    const link = document.createElement('a');
    link.href = `assets/reports/${fileName}`; // Ensure reports are stored in assets/reports
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  onFileSelected(event: any, report: any, reportType: string) {
    const file: File = event.target.files[0];

    if (file && file.type === "application/pdf") {
      this.selectedFile = file;
      this.selectedReport = report;
      this.selectedReportType = reportType;

      const confirmUpload = confirm(`Do you want to upload ${file.name}?`);
      if (confirmUpload) {
        this.uploadReport();
      }
    } else {
      alert("Please select a valid PDF file.");
    }
  }

  uploadReport() {
    if (!this.selectedFile || !this.selectedReport || !this.selectedReportType) return;

    const formData = new FormData();
    formData.append('id', this.selectedReport.id.toString());
    formData.append('name', this.selectedReport.name);
    formData.append(this.selectedReportType, this.selectedFile);
console.log(formData)
    this.http.post('http://127.0.0.1:8099/api/guardian/file/upload', formData)
      .subscribe({
        next: () => {
          alert('File uploaded successfully!');
          // this.selectedReport[reportType] = this.selectedFile.name;
        },
        error: (err) => alert('Error uploading file: ' + err.message)
      });

    this.selectedFile = null;
    this.selectedReport = null;
    this.selectedReportType = null;
    this.fetchReports();

  }

}
