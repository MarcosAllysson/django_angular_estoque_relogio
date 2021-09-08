import { WatchsService } from './../../../shared/services/watchs.service';
import { Router } from '@angular/router';
import { Watch } from './../../../shared/models/watch';
import { StorageService } from './../../../shared/services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public editMode: boolean;
  public watch: Watch = {
    id: null,
    price: '',
    quantity: 0,
    title: ''
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
}
