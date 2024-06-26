import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'search/:searchItem',
        component: HomeComponent
    },
    {
        path: 'tag/:tag',
        component: HomeComponent
    },
    {
        path: 'food/:id',
        component: FoodPageComponent
    },
    {
        path: 'cart',
        component: CartPageComponent
    }
];
