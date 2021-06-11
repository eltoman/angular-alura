import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transfer: any;

  transferIt($event: any){
    console.log($event);
    this.transfer = $event;
  }
}
