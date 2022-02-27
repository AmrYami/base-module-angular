import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/ar',
    redirectTo: 'login'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
  ],
  declarations: [
    LoginComponent

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class LoginModule { }
