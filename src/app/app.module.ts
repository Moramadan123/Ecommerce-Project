import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../app/carts/componenets/cart/cart.component'; // Adjust the import path as needed
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
