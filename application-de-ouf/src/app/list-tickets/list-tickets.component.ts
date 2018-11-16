import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TicketService } from '../shared/repository/ticket.service';
import { Ticket } from '../shared/model/ticket.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit, OnDestroy {

  tickets: Array<Ticket>;

  ticketSubcription: Subscription;

  constructor(
    private ticketService: TicketService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // this.ticketSubcription = this.ticketService.getObservable().subscribe(
    //   (tickets) => this.tickets = tickets,
    //   (error) => console.log(error),
    //   () => console.log('complete')
    // );

    this.ticketService.get().then((tickets) => {
      this.tickets = tickets;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    // if (this.ticketSubcription) {
    //   this.ticketSubcription.unsubscribe();
    // }
  }

  onDelete(ticket: Ticket) {
    console.log("delete", ticket);
    const index = this.tickets.findIndex((t) => t === ticket);
    this.ticketService.delete(index)
      .then((state) => {
        console.log('suppression', state);
        // TODO suppression en local ??
        // ici pas besoin puisque ref(this.ticket) === ref(this.ticketService.tickets)
      })
      .catch((error) => console.log('impossible de supprimer'));
  }

  onEdit(ticket: Ticket) {
    const index = this.tickets.findIndex((t) => t === ticket);
    console.log("edit", ticket);
  }

  onAdd(ticket: Ticket) {
    this.ticketService.add(ticket);
  }

  onChange(ticket: Ticket) {
    const index = this.tickets.findIndex((t) => t === ticket);
  }

}
