import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadcreditsPageRoutingModule } from './loadcredits-routing.module';

import { LoadcreditsPage } from './loadcredits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadcreditsPageRoutingModule
  ],
  declarations: [LoadcreditsPage]
})
export class LoadcreditsPageModule {}
