import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './components/component.component';
import { LoginGuard } from './guard/login.guard';
  
const routes: Routes = [
  { path: 'components', component: ComponentComponent, 
    loadChildren: () => import('./components/component.module').then(m => m.ComponentModule),
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
