import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer.model';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  @Input() transfers: any[] = [];

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.transferService.getAll().subscribe((transfers: Transfer[]) => {
      this.transfers = transfers;
    }
    )
  }

}
