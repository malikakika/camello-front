import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonalizedPageComponent } from './pages/personalized-page/personalized-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { StoreComponent } from './pages/store/store.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'Home',
    component: HomeComponent,

  },
  { path: 'personalize', component: PersonalizedPageComponent },
  { path: 'request', component: RequestPageComponent },
  { path: 'product', component: StoreComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
