import { ListTicketsComponent } from "./list-tickets/list-tickets.component";
import { TicketAddComponent } from "./ticket-add/ticket-add.component";
import { HomeComponent } from "./home.component";

export const HOME_ROUTES = [
    {
        component: HomeComponent,
        path: '',
        children: [
            {
                component: ListTicketsComponent,
                path: 'list'
            },
            {
                component: TicketAddComponent,
                path: 'add'
            },
            {
                path: '**',
                component: ListTicketsComponent
            }
        ]
    },
];
