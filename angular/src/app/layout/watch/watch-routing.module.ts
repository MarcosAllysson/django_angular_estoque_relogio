import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWatchComponent } from './form-watch/form-watch.component';


const routes: Routes = [
  {
    path: '',
    component: FormWatchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchRoutingModule { }
