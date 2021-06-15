import { TransferService } from './../services/transfer.service';
import { Transfer } from './../models/transfer.model';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  @Output() onTransfer = new EventEmitter<any>();

  value!: number;
  receiver!: number;

  constructor(private transferService: TransferService, private router: Router) {}

  transferIt(){
    console.log("New Transfer Requested");

    const valueTransfer : Transfer = { value: this.value, receiver: this.receiver };

    this.transferService.addTransfer(valueTransfer).subscribe(result => {
      console.log(result);
      this.cleanFields();
      this.router.navigateByUrl('statement');
    },
    error => console.error(error)
    );
  }

  cleanFields(){
    this.value = 0;
    this.receiver = 0;
  }

}
