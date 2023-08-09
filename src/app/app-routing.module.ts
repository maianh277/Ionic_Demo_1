import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'all-page',
    loadChildren: () => import('./pages/all-page/all-page.module').then( m => m.AllPagePageModule)
  },
  {
    path: 'fast-food-page',
    loadChildren: () => import('./pages/fast-food-page/fast-food-page.module').then( m => m.FastFoodPagePageModule)
  },
  {
    path: 'seafood-page',
    loadChildren: () => import('./pages/seafood-page/seafood-page.module').then( m => m.SeafoodPagePageModule)
  },
  {
    path: 'detail-page',
    loadChildren: () => import('./pages/detail-page/detail-page.module').then( m => m.DetailPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
