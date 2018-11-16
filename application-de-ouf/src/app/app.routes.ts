import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES = [
    {
        path: 'login',
        component: LoginComponent
    },
    // {
    //     path: 'home',
    //     loadChildren: './home/home.module#HomeModule'
    // },
    {
        path: '**',
        redirectTo: '/login'
    }
];
