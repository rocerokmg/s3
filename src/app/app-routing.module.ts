import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./pages/play/play.module').then( m => m.PlayPageModule)
  },
  {
    path: 'coordinator',
    loadChildren: () => import('./pages/coordinator/coordinator.module').then( m => m.CoordinatorPageModule)
  },
  {
    path: 'loadcredits',
    loadChildren: () => import('./pages/loadcredits/loadcredits.module').then( m => m.LoadcreditsPageModule)
  },
  {
    path: 'ledger',
    loadChildren: () => import('./pages/ledger/ledger.module').then( m => m.LedgerPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./pages/changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
