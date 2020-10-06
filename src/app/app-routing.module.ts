import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {MainComponent} from "./platform/main/main.component";
import {main} from "@angular/compiler-cli/src/main";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: { backgroundIsVisible: false }
  },
  {path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'platform',
    loadChildren: () => import('./platform/platform.module')
      .then(m => m.PlatformModule)
  },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
