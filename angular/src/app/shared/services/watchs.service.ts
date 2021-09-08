import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watch } from '../models/watch';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WatchsService {

  constructor(private http: HttpClient) { }

  listarWatchs(): Observable<Watch[]> {
    const headers = new HttpHeaders().append('Authorization', environment.token);
    return this.http.get<Watch[]>(`${API_URL}/watches/`, { headers });
  }

  editarWatch(id: number, watch: Watch): Observable<Watch> {
    const headers = new HttpHeaders().append('Authorization', environment.token);
    return this.http.put<Watch>(`${API_URL}/watches/${id}/`, watch, { headers });
  }
  
  deletarWatch(id: number): Observable<Watch> {
    const headers = new HttpHeaders().append('Authorization', environment.token);    
    return this.http.delete<Watch>(`${API_URL}/watches/${id}/`, { headers });
  }

  adicionarWatch(watch: Watch): Observable<Watch> {
    const headers = new HttpHeaders().append('Authorization', environment.token);
    return this.http.post<Watch>(`${API_URL}/watches/`, watch, { headers });
  }
}
