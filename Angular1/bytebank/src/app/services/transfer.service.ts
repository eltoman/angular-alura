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

  addTransfer(transfer: any){
    this.build(transfer)
    this.transferList.push(transfer);
  }

  private build(transfer: any){
    transfer.transferDate = new Date();
  }

}
