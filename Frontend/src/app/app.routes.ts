import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'products', component: ProductsComponent, title: 'Products'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'register', component: RegisterComponent, title: 'Register'},
    {path: 'dashboard', component: DashboardComponent, title: 'Dashboard'},
];
