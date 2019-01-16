import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditComponent } from './product-edit/product-edit.component';

const ROUTES = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id',
    component: ProductDetailComponent,
    resolve: { resolvedData: ProductResolver }
  },
  { path: 'products/:id/edit',
    component: ProductEditComponent,
    resolve: { resolvedData: ProductResolver }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule {}
