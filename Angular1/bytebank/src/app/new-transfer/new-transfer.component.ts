import { Component } from "@angular/core";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  value!: number;
  receiver!: string;

  transferIt(){
    console.log("New Transfer Requested");
    console.log('Value: ', this.value);
    console.log('Receiver: ', this.receiver);
  }

}
