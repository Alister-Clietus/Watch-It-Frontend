export class InmatesMedicalDetails 
{
    id!: number;
    firstName!: string;
    lastName!: string;
    bloodPressure!: string; // Format: "120/80 mmHg"
    sugarLevel!: string; // Format: "110 mg/dL"
    cholesterol!: string; // Format: "180 mg/dL"
    isAbleToWalk!: boolean;
    appointmentDate!: string; // ISO date format (YYYY-MM-DD)
    recordedAt!: string; // ISO date format (YYYY-MM-DD)
}
