import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  sendOrder(data: any) {
    return this.http.post('https://testologia.site/burgers-order', data);
  }

  getData() {
    return this.http.get('https://testologia.site/burgers-data?extra=black');
  }
}
