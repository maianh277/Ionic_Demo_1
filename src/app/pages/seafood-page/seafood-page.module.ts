import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeafoodPagePageRoutingModule } from './seafood-page-routing.module';

import { SeafoodPagePage } from './seafood-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeafoodPagePageRoutingModule
  ],
  declarations: [SeafoodPagePage]
})
export class SeafoodPagePageModule {}
