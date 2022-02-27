import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: './main/content/pages/pages.module#PagesModule',
  // },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
];

// const routes: Routes = [
//   { path: 'auth', loadChildren: () => import('').then(m => m.AuthenticationModule) }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
