import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ProductComponent } from './product.component';
import { ErrorComponent } from './error.component';
import { ProductDetailComponent } from './product-detail.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: 'detail/:id', component: ProductDetailComponent, 
          children : [
              { path: 'overview', component: ErrorComponent },
              { path: 'spec', component: ContactComponent },  
              { path: '', redirectTo:'overview', pathMatch:"full" }
          ]
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
