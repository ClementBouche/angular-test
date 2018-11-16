import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Ticket } from '../shared/model/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;

  @Output() delete = new EventEmitter<Ticket>();

  @Output() edit = new EventEmitter<Ticket>();

  editionMode = false;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  triggerDelete() {
    this.delete.emit(this.ticket);
  }

  triggerEdit($event) {
    this.ticket = $event;
    this.editionMode = false;
    this.edit.emit($event);
  }

  goEdition() {
    this.editionMode = true;
  }

}
