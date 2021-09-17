import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent, ContactUsComponent, HomeComponent } from './pages';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'home', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class HomeRoutingModule {}
