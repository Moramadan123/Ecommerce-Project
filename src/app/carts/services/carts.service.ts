import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient) {}

  getAllcarts(startDate: string, endDate: string) {
    let params = new HttpParams();
    params = params.append('startDate', startDate).append('endDate', endDate);
    return this.http.get(environment.baseapi + 'carts', { params });
  }
  deleteCart(id: number) {
    return this.http.delete(environment.baseapi + 'carts/' + id);
  }
  createNewCart(model: any) {
    return this.http.post(environment.baseapi + 'carts', model);
  }
}
