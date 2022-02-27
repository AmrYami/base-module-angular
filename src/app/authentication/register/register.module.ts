import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register/ar',
    redirectTo: 'register'
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
    RegisterComponent

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
export class RegisterModule { }
