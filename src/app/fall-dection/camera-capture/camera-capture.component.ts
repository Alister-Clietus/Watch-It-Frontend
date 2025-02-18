import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GuardianSideBarComponent } from '../../guardian/guardian-side-bar/guardian-side-bar.component';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-camera-capture',
  standalone: true,
  imports: [GuardianSideBarComponent, CommonModule],
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.css']
})

export class CameraCaptureComponent implements OnInit 
{
  videoUrll: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  ngOnInit(): void 
  {

  }

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;  
  @ViewChild('videoCanvas', { static: false }) videoCanvas!: ElementRef;
  mediaRecorder!: MediaRecorder;
  recordedChunks: Blob[] = [];
  recordedBlob: Blob | null = null;
  isRecording = false;
  videopreview = true;
  videoUrl: string | null = null;
  uploadBoolean = false;
  constructor(private http: HttpClient) { }


  async startRecording() {
    this.videoUrl = null
    this.recordedChunks = []
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    this.videoElement.nativeElement.srcObject = stream;
    this.mediaRecorder = new MediaRecorder(stream);
    this.mediaRecorder.ondataavailable = event => this.recordedChunks.push(event.data);
    this.mediaRecorder.onstop = () => {
      this.recordedBlob = new Blob(this.recordedChunks, { type: 'video/mp4' });
      console.log(this.recordedBlob.type)
      this.videoUrl = URL.createObjectURL(this.recordedBlob);
      this.videoElement.nativeElement.srcObject = null;
      this.videoElement.nativeElement.src = this.videoUrl;
      this.videoElement.nativeElement.controls = true;
    };
    this.mediaRecorder.start();
    this.isRecording = true;
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = false;

    // Stop the webcam stream completely
    const stream = this.videoElement.nativeElement.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach(track => track.stop()); // Stop each track (video/audio)
    }
    this.videoElement.nativeElement.srcObject = null; // Remove stream reference
  }


  // uploadVideo(event: any) {
  //   this.videoUrl = null;
  //   const file = event.target.files[0];

  //   if (file) {
  //     this.videoUrl = URL.createObjectURL(file);
  //     this.videoElement.nativeElement.srcObject = null;
  //     this.videoElement.nativeElement.src = this.videoUrl;
  //     this.videoElement.nativeElement.controls = true;

  //     this.videoElement.nativeElement.onloadeddata = () => {
  //       this.videoElement.nativeElement.play();
  //     };

  //     this.recordedBlob = file; // Store the selected file for uploading
  //   }
  // }

  // sendVideoToServer() {
  //   if (!this.recordedBlob) {
  //     console.error('No video to upload');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('video', this.recordedBlob, 'recorded-video.mp4');

  //   this.http.post('http://127.0.0.1:5000/upload', formData).subscribe(
  //     response => {
  //       console.log('Video uploaded successfully', response);
  //     },
  //     error => {
  //       console.error('Error uploading video', error);
  //     }
  //   );
  // }

  uploadVideo(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.videoUrll = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadToServer() 
  {
    if (!this.selectedFile) {
      alert('Please select a video first.');
      return;
    }
    const formData = new FormData();
    formData.append('video', this.selectedFile,'recorded-video.mp4');
    this.http.post('http://127.0.0.1:5000/upload', formData).subscribe(
      (response:any) =>
         {
          Swal.fire({
            title: "Success!",
            text: "Video uploaded successfully!",
            icon: "success",
            confirmButtonColor: "#28a745",
          });  
          if (response.fall_detected) 
          {
          // Trigger the alert if fall is detected
          this.triggerAlert();
        } 
        else 
        {
          Swal.fire({
            title: "Success!",
            text: "No Fall Detected",
            icon: "success",
            confirmButtonColor: "#dc3545",
          });
        }
        },
      (error) => {
        console.error('Upload failed:', error);

          Swal.fire({
            title: "fail!",
            text: "API Error Detected Check the System!",
            icon: "error",
            confirmButtonColor: "#28a745",
          });      
        }
    );
  }

  sendVideo() {
    if (!this.recordedBlob) return;
    console.log("video is found")
    const formData = new FormData();
    formData.append('video', this.recordedBlob, 'recorded-video.mp4');

    this.http.post('http://127.0.0.1:5000/upload', formData).subscribe(
      (response: any) => {
        console.log('Upload successful', response);

        // Check if fall is detected
        console.log(response.fall_detected)
        if (response.fall_detected=="true") 
          {
          this.triggerAlert();
        } else 
        {
          // Handle no fall detection
          Swal.fire({
            title: "Success!",
            text: "No Fall Detected",
            icon: "success",
            confirmButtonColor: "#dc3545",
          });
        }
      },
      (error) => {
        console.error('Upload failed', error);
        alert('There was an error uploading the video.');
      }
    );
  }




  showAlert: boolean = false;
  alertSound = new Audio('/alert.mp3'); // Place the sound file in `assets` folder

  @ViewChild('alertBox') alertBox!: ElementRef;

  triggerAlert() {
    this.showAlert = true;
    this.alertSound.play();
    this.alertSound.loop = true; // Looping sound until dismissed
  }

  dismissAlert() {
    this.showAlert = false;
    this.alertSound.pause();
    this.alertSound.currentTime = 0;
  }

  clear() {
    this.recordedBlob=null
    this.recordedChunks = []
    this.videoUrll=null
    this.videoUrl = null

  }
}
