import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorPageRoutingModule } from './coordinator-routing.module';

import { CoordinatorPage } from './coordinator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorPageRoutingModule
  ],
  declarations: [CoordinatorPage]
})
export class CoordinatorPageModule {}
