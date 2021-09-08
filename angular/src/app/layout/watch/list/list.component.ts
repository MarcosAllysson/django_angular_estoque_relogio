import { StorageService } from './../../../shared/services/storage.service';
import { Router } from '@angular/router';
import { Watch } from './../../../shared/models/watch';
import { WatchsService } from './../../../shared/services/watchs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public watchs: Watch[] = [];

  constructor(private watchService: WatchsService,private storageService:StorageService,private router:Router) { }

  ngOnInit(): void {
    this.listarWatchs();
  }

  listarWatchs() {
    this.watchService.listarWatchs().toPromise().then((watch: Watch[]) => {
      this.watchs = watch;
    }).catch((err) => console.error(err))
  }

  excluirWatch(id: number) {
    this.watchService.deletarWatch(id).toPromise().then((res) => {
      console.log(res);
      this.ngOnInit();

    }).catch((err) => console.error(err))
  }

  editarWatch(watch:Watch){
    this.storageService.clearWatch();
    this.storageService.setWatch(watch);
    this.router.navigate(['form'])
  }
  adicionarWatch(){
    this.storageService.clearWatch();
    this.router.navigate(['form'])
  }
}

