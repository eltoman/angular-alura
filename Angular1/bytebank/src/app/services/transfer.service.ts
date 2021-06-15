import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private transferList: any[];


  constructor() {
    this.transferList = [];
  }

  get transfers(){
    return this.transferList;
  }

  addTransfer(transfer: any){
    this.build(transfer)
    this.transferList.push(transfer);
  }

  private build(transfer: any){
    transfer.transferDate = new Date();
  }

}
