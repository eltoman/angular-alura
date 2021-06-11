import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transfers: any[] = [];

  transferIt($event: any){
    console.log($event);
    const transferDetail = {...$event, transferDate: new Date()};
    this.transfers.push(transferDetail);
  }
}
