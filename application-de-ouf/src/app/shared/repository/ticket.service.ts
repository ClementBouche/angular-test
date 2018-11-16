import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Ticket } from '../model/ticket.model';
import { TICKETS } from './mock-tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets: Array<Ticket>;

  constructor(
    private http: HttpClient
  ) { }

  getObservable(): Observable<Array<Ticket>> {
    return new Observable<Array<Ticket>>((observer) => {
      observer.next(TICKETS);
    });
  }

  getPromise(): Promise<Array<Ticket>> {
    if (!this.tickets) {
      this.tickets = TICKETS;
    }
    return Promise.resolve(this.tickets);
  }

  get(): Promise<Array<Ticket>> {
    if (!this.tickets) {
      this.tickets = TICKETS;
    }
    return Promise.resolve(this.tickets);
  }

  getOne(index: number): Promise<Ticket> {
    return Promise.resolve(this.tickets[index]);
  }

  edit(index: number, newTicket: Ticket): Promise<boolean> {
    this.tickets[index] = newTicket;
    return Promise.resolve(true);
  }

  delete(index: number): Promise<boolean> {
    this.tickets.splice(index, 1);
    return Promise.resolve(true);
  }

  add(ticket: Ticket): Promise<boolean> {
    this.tickets.push(ticket);
    return Promise.resolve(true);
  }

}
