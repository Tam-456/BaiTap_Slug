import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerGroup } from '../classes/ICustomer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private _url: string = '/datasets/customers.json';

  constructor(private _http: HttpClient) {}

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this._http.get<CustomerGroup[]>(this._url);
  }
}