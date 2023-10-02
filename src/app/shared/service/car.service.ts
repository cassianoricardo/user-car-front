import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private _http: HttpClient) {}

  addCar(data: any): Observable<any> {
    return this._http.post(`${environment.api}/cars`, data);
  }

  updateCar(id: number, data: any): Observable<any> {
    return this._http.put(`${environment.api}/cars/${id}`, data);
  }

  getCarList(): Observable<any> {
    return this._http.get(`${environment.api}/cars`);
  }

  deleteCar(id: number): Observable<any> {
    return this._http.delete(`${environment.api}/cars/${id}`);
  }
}
