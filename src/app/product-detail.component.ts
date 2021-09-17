import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  template: `
  <h1>Product Details Page</h1>
   
  product : {{product.name}}
  price : {{ product.price}}
   
  <ul class="nav navbar-nav">
      <li><a [routerLink]="['overview']">OverView </a></li>
      <li><a [routerLink]="['spec']">Specification </a></li>
  </ul>
   
  <router-outlet></router-outlet>
   
  <p>
      <a class='btn btn-default' (click)="onBack()">Back to Product List </a>
  </p>`,
})
export class ProductDetailComponent {
  product: Product;
  id: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  /* Using snapshot */
  // ngOnInit() {

  //    //This still works but is deprecated
  //    //this.id=this._Activatedroute.snapshot.params['id'];

  //    this.id=this._Activatedroute.snapshot.paramMap.get("id");

  //    let products=this._productService.getProducts();
  //    this.product=products.find(p => p.productID==this.id);
  // }

  /* Using Subscribe */

  sub: any;

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.id = params.get('id');
      let products = this._productService.getProducts();
      this.product = products.find((p) => p.productID == this.id);
    });

    // This params is deprecated

    //this.sub=this._Activatedroute.params.subscribe(params => {
    //    this.id = params['id'];
    //    let products=this._productService.getProducts();
    //    this.product=products.find(p => p.productID==this.id);
    //
    //});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['product']);
  }
}
