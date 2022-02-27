import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { RegisterModule } from './register/register.module';

// import { RegisterModule } from './register/register.module';
// import { RegisterComponent } from './register/register.component';
// import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    ProfileModule,
    RegisterModule,

  ],
  declarations: [
    // RegisterComponent
  ],
  providers: []
})
export class AuthenticationModule { }
