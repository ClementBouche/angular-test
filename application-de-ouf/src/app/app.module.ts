import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';

import { TicketComponent } from './ticket/ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { LoginComponent } from './login/login.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    ListTicketsComponent,
    LoginComponent,
    TicketAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
