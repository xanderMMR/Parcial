import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocioListComponent } from 'src/app/socio-list/socio-list.component';
import { CreateSocioComponent } from 'src/app/create-socio/create-socio.component';

const routes: Routes = [
  { path : '', redirectTo: 'customer', pathMatch: 'full'},
  { path: 'list', component:SocioListComponent},
  { path: 'new', component:CreateSocioComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
