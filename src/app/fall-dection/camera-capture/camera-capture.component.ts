import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.css']
})
export class CameraCaptureComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoCanvas') videoCanvas!: ElementRef<HTMLCanvasElement>;

  private mediaRecorder!: MediaRecorder;
  private chunks: BlobPart[] = [];
  public isRecording = false;
  public videoBlob!: Blob | null;
  public videoURL!: string | null;
  private videoStream!: MediaStream | null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initCamera();
  }

  initCamera() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        this.videoStream = stream; // Save the video stream for later use
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
        this.mediaRecorder = new MediaRecorder(stream);

        this.mediaRecorder.ondataavailable = (event) => {
          this.chunks.push(event.data);
        };

        this.mediaRecorder.onstop = () => {
          this.videoBlob = new Blob(this.chunks, { type: 'video/mp4' });
          this.videoURL = URL.createObjectURL(this.videoBlob);
          this.chunks = [];
          this.sendVideo(); // Automatically send the video after stopping recording
        };
      })
      .catch((error) => console.error('Camera initialization failed:', error));
  }

  startRecording() {
    this.chunks = [];
    this.mediaRecorder.start();
    this.isRecording = true;
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = false;
  }

  stopCamera() {
    if (this.videoStream) {
      const tracks = this.videoStream.getTracks();
      tracks.forEach((track) => track.stop()); // Stop all tracks (video and audio)
      this.videoStream = null;

      // Clear the video element
      this.videoElement.nativeElement.srcObject = null;
      this.videoElement.nativeElement.pause();
    } else {
      console.warn('No active camera stream to stop.');
    }
  }

  sendVideo() {
    if (!this.videoBlob) {
      console.error('No video file to send.');
      return;
    }

    const formData = new FormData();
    formData.append('video', this.videoBlob, 'fall-detection-video.mp4');

    this.http.post('http://127.0.0.1:8000/api/upload/', formData).subscribe({
      next: (response) => {
        console.log('Video uploaded successfully:', response);
        this.resetVideoData(); // Clear the video data after successful upload
      },
      error: (error) => {
        console.error('Video upload failed:', error);
        this.resetVideoData(); // Clear the video data even if upload fails
      },
      complete: () =>{
        console.log('Send vedio successfull');
        
      }
    });
  }

  resetVideoData() {
    this.videoBlob = null;
    this.videoURL = null;
  }
}
