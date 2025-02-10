import { Component } from '@angular/core';
import { GuardianSideBarComponent } from '../../guardian-side-bar/guardian-side-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inmates-medical-details',
  standalone: true,
  imports: [GuardianSideBarComponent,CommonModule],
  templateUrl: './inmates-medical-details.component.html',
  styleUrl: './inmates-medical-details.component.css'
})
export class InmatesMedicalDetailsComponent 
{
  reports = [
    { 
      name: 'John Doe', 
      currentMedicalReport: 'john_current.pdf',
      fullBodyReport: 'john_fullbody.pdf',
      testReports: 'john_tests.pdf',
      dietDetails: 'john_diet.pdf'
    },
    { 
      name: 'Jane Smith', 
      currentMedicalReport: 'jane_current.pdf',
      fullBodyReport: 'jane_fullbody.pdf',
      testReports: 'jane_tests.pdf',
      dietDetails: 'jane_diet.pdf'
    }
    ,
    { 
      name: 'Jane Smith', 
      currentMedicalReport: 'jane_current.pdf',
      fullBodyReport: 'jane_fullbody.pdf',
      testReports: 'jane_tests.pdf',
      dietDetails: 'jane_diet.pdf'
    }
    ,
    { 
      name: 'Jane Smith', 
      currentMedicalReport: 'jane_current.pdf',
      fullBodyReport: 'jane_fullbody.pdf',
      testReports: 'jane_tests.pdf',
      dietDetails: 'jane_diet.pdf'
    }
    ,
    { 
      name: 'Jane Smith', 
      currentMedicalReport: 'jane_current.pdf',
      fullBodyReport: 'jane_fullbody.pdf',
      testReports: 'jane_tests.pdf',
      dietDetails: 'jane_diet.pdf'
    },
    { 
      name: 'Jane Smith', 
      currentMedicalReport: 'jane_current.pdf',
      fullBodyReport: 'jane_fullbody.pdf',
      testReports: 'jane_tests.pdf',
      dietDetails: 'jane_diet.pdf'
    },
    { 
      name: 'Jane Smith', 
      currentMedicalReport: 'jane_current.pdf',
      fullBodyReport: 'jane_fullbody.pdf',
      testReports: 'jane_tests.pdf',
      dietDetails: 'jane_diet.pdf'
    },
    { 
      name: 'Jane Smith', 
      currentMedicalReport: 'jane_current.pdf',
      fullBodyReport: 'jane_fullbody.pdf',
      testReports: 'jane_tests.pdf',
      dietDetails: 'jane_diet.pdf'
    },
    { 
      name: 'Jane Smith', 
      currentMedicalReport: 'jane_current.pdf',
      fullBodyReport: 'jane_fullbody.pdf',
      testReports: 'jane_tests.pdf',
      dietDetails: 'jane_diet.pdf'
    }
  ];

  downloadReport(fileName: string) {
    const link = document.createElement('a');
    link.href = `assets/reports/${fileName}`; // Ensure reports are stored in assets/reports
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
