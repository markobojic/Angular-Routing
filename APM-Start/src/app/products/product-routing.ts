import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';

const ROUTES = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      { path: ':id',
        component: ProductDetailComponent,
        resolve: { resolvedData: ProductResolver }
      },
      { path: ':id/edit',
        component: ProductEditComponent,
        resolve: { resolvedData: ProductResolver },
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent
          }
        ]
      },
    ]
   },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule {}
