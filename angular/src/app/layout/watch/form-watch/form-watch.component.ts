import { Watch } from './../../../shared/models/watch';
import { WatchsService } from './../../../shared/services/watchs.service';
import { StorageService } from './../../../shared/services/storage.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-form-watch',
  templateUrl: './form-watch.component.html',
  styleUrls: ['./form-watch.component.css'],
  animations: [routerTransition()]
})
export class FormWatchComponent implements OnInit {

  public editMode: boolean;
  public watch: Watch = {
    id: null,
    price: '',
    quantity: 0,
    title: '',
    photo: '',
  };
  constructor(private storageService: StorageService, private watchService: WatchsService, private router: Router) { }

  ngOnInit(): void {
    this.isEdit();
  }

  isEdit() {
    const tmp = this.storageService.getWatch();
    if (tmp !== null) {
      this.watch = tmp;
      this.editMode = true;
      this.storageService.clearWatch();
    } else {
      this.storageService.clearWatch();
    }
  }

  adicionarWatch(watch: Watch) {
    this.watchService.adicionarWatch(watch).toPromise().then((res) => {
      console.log(res);
      this.router.navigate([''])
    }).catch((err) => console.log(err))
  }
  editarWatch(id: number, watch: Watch) {
    this.watchService.editarWatch(id, watch).toPromise().then((res) => {
      console.log(res);
      this.router.navigate([''])
    }).catch((err) => console.log(err))
  }
  goBack() {
    this.router.navigate(['']);
  }
}
