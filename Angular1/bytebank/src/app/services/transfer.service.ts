import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private transferList: any[];
  private url = "http://localhost:3000/transfers";


  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfers(){
    return this.transferList;
  }

  getAll(): Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>(this.url);
  }

  addTransfer(transfer: Transfer) : Observable<Transfer>{
    this.hydrate(transfer)
    return this.httpClient.post<Transfer>(this.url, transfer);
  }

  private hydrate(transfer: any){
    transfer.transferDate = new Date();
  }

}
