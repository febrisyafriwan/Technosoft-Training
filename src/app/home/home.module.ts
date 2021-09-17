import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutUsComponent, ContactUsComponent, HomeComponent } from './pages';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [],
})
export class HomeModule {}
