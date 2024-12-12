import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InventoryComponent } from './pages/dashboard/inventory/inventory.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { authGuard } from './guards/auth.guard'; //protegemos las rutas

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductsComponent, title: 'Products' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: 'inventory', component: InventoryComponent, title: 'Inventory' },
      { path: 'users', component: UsersComponent, title: 'Users' },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'Error 404' }, // Cualquier ruta que no exista, cae aqui
];
