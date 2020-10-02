import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFarmaComponent } from './views/farma/create-farma/create-farma.component';
import { ListFarmaComponent } from './views/farma/list-farma/list-farma.component';

const routes: Routes = [
  {
    path: '', 
    component: ListFarmaComponent
  },
  {
    path: 'farma/create', 
    component: CreateFarmaComponent
  },
  {
    path: 'farma/create/:cnpj', 
    component: CreateFarmaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
