import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraCaptureComponent } from './camera-capture/camera-capture.component';

const routes: Routes = 
[
  {
    path: 'camera-capture', // Route for the CameraCaptureComponent
    component: CameraCaptureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FallDectionRoutingModule { }
