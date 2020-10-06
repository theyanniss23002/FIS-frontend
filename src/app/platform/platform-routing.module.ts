import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: '**', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
