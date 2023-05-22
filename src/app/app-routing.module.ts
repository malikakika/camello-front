import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonalizedPageComponent } from './pages/personalized-page/personalized-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { StoreComponent } from './pages/store/store.component';
import { AdminPageComponent } from './Admin/pages/admin-page/admin-page.component';
import { AdminUsersComponent } from './Admin/components/admin-users/admin-users.component';
import { AdminArticlesComponent } from './Admin/components/admin-products/admin-articles.component';
import { AdminOrdersComponent } from './Admin/components/admin-orders/admin-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'Home',
    component: HomeComponent,

  },
  { path: 'personalize', component: PersonalizedPageComponent },
  { path: 'request', component: RequestPageComponent },
  { path: 'product', component: StoreComponent },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      { path: 'users', component: AdminUsersComponent },
      { path: 'products', component: AdminArticlesComponent },
      { path: 'orders', component: AdminOrdersComponent },



    ]
  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
