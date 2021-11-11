import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { HasPermissionLoadedGuard } from './guards/has-permission-loaded/has-permission-loaded.guard';
import { NavGuard } from './guards/nav/nav.guard';
import { SerialExecuteGuard } from './guards/serial-execute/serial-execute.guard';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, NavGuard],
    data: {
      title: 'My Home',
      slug: 'home',
    },
  },
  {
    path: 'pipeline',
    component: PipelineComponent,
    canActivate: [
      // AuthGuard,
      // HasPermissionLoadedGuard,
      // NavGuard,
      SerialExecuteGuard,
    ],
    data: {
      guards: [AuthGuard, HasPermissionLoadedGuard, NavGuard],
      title: 'My Pipeline',
      slug: 'pipeline',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
