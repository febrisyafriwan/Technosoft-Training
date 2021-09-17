import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { ProductComponent } from './product.component';
import { ErrorComponent } from './error.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { HomeModule } from './home';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HomeModule, RouterModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
