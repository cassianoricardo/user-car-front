import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  addUser(data: any): Observable<any> {
    return this._http.post(`${environment.api}/users`, data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this._http.put(`${environment.api}/users/${id}`, data);
  }

  getUserList(): Observable<any> {
    return this._http.get(`${environment.api}/users`);
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`${environment.api}/users/${id}`);
  }
}
