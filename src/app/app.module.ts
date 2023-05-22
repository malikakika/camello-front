import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalizedPageComponent } from './pages/personalized-page/personalized-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { StoreComponent } from './pages/store/store.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AdminSideNavComponent } from './Admin/components/admin-side-nav/admin-side-nav.component';
import { AdminUsersComponent } from './Admin/components/admin-users/admin-users.component';
import { AdminArticlesComponent } from './Admin/components/admin-products/admin-articles.component';
import { AdminOrdersComponent } from './Admin/components/admin-orders/admin-orders.component';
import { AdminPageComponent } from './Admin/pages/admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    PersonalizedPageComponent,
    RequestPageComponent,
    StoreComponent,
    SideNavComponent,
    AdminSideNavComponent,
    AdminUsersComponent,
    AdminArticlesComponent,
    AdminOrdersComponent,
    AdminPageComponent

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,


    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
