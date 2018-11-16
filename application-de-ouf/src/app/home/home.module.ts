import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TicketComponent } from './ticket/ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { MaterialModule } from '../material.module';
import { HOME_ROUTES } from './home.route';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    TicketComponent,
    ListTicketsComponent,
    TicketAddComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  providers: [
  ]
})
export class HomeModule { }
