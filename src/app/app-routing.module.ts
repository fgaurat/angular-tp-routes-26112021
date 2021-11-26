import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartComponent } from './start/start.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  { path: "", redirectTo:"start",pathMatch:"full"},
  { path: "start", component: StartComponent,canActivate:[YourGuardGuard] },
  {
    path: "hello",
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },


  {path:"**",component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
