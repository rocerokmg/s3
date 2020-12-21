import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadcreditsPage } from './loadcredits.page';

const routes: Routes = [
  {
    path: '',
    component: LoadcreditsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadcreditsPageRoutingModule {}
