import { StorageService } from './../../shared/services/storage.service';
import { WatchsService } from './../../shared/services/watchs.service';
import { Watch } from './../../shared/models/watch';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public sliders: Array<any> = [];
    public watchs: Watch[] = [];

    constructor(private watchService: WatchsService, private storageService: StorageService, private router: Router) { }


    ngOnInit(): void {
        this.listarWatchs();
    }

    listarWatchs() {
        this.watchService.listarWatchs().toPromise().then((watch: Watch[]) => {
            this.watchs = watch;
            this.sliders = watch;

        }).catch((err) => console.error(err))
    }

    excluirWatch(id: number) {
        this.watchService.deletarWatch(id).toPromise().then((res) => {
            console.log(res);
            this.ngOnInit();

        }).catch((err) => console.error(err))
    }

    editarWatch(watch: Watch) {
        this.storageService.clearWatch();
        this.storageService.setWatch(watch);
        this.router.navigate(['watch'])
    }
    adicionarWatch() {
        this.storageService.clearWatch();
        this.router.navigate(['watch'])
    }
}
