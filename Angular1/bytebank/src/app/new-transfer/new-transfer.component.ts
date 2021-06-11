import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  @Output() onTransfer = new EventEmitter<any>();

  value!: number;
  receiver!: number;

  transferIt(){
    console.log("New Transfer Requested");
    const valueTransfer = { value: this.value, receiver: this.receiver };
    this.onTransfer.emit(valueTransfer);
    this.cleanFields();
  }

  cleanFields(){
    this.value = 0;
    this.receiver = 0;
  }

}
