import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchRoutingModule } from './watch-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FormWatchComponent } from './form-watch/form-watch.component';
import { TranslateModule } from '@ngx-translate/core';
import { DetailWatchComponent } from './detail-watch/detail-watch.component';


@NgModule({
  declarations: [
    FormWatchComponent,
    DetailWatchComponent
  ],
  imports: [
    CommonModule,
    WatchRoutingModule,
    NgbModule,
    FormsModule,
    TranslateModule
  ],
})
export class WatchModule { }
