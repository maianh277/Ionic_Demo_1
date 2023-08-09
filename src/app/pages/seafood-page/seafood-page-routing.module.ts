import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeafoodPagePage } from './seafood-page.page';

const routes: Routes = [
  {
    path: '',
    component: SeafoodPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeafoodPagePageRoutingModule {}
