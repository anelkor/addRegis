import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckcardComponent } from './components/checkcard/checkcard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { StatusPageComponent } from './components/status-page/status-page.component';
import { Form01Component } from './components/form01/form01.component';
import { SelectformComponent } from './components/selectform/selectform.component';
import { Form02Component } from './components/form02/form02.component';
import { RegisSuccessComponent } from './components/regis-success/regis-success.component';
import { CheckregisComponent } from './components/checkregis/checkregis.component';
import { AuthGuard } from './_helpers/auth.guard';

// const routes: Routes = [
//   { path: "checkcard/:user", component: CheckcardComponent },
//   // { path: "", redirectTo: "/checkcard", pathMatch: "full" },
//   { path: "addregis", component: AddPageComponent },
//   // { path: "status", component: StatusPageComponent },
//   // { path: "form01", component: Form01Component },
//   // { path: "form02", component: Form02Component },
//   // { path: "select", component: SelectformComponent },
//   // { path: "regis-success", component: RegisSuccessComponent },
//   { path: "checkregis", component: CheckregisComponent },
//   { path: "**", component: PageNotFoundComponent },
// ];



const routes: Routes = [
  // { path: "checkcard/:user", component: CheckcardComponent },
  { path: "", redirectTo: "/checkregis", pathMatch: "full" },
  // { path: "addregis", component: AddPageComponent },
  { path: "status", component: StatusPageComponent },
  { path: "form01", component: Form01Component , canActivate: [AuthGuard] },
  { path: "form02", component: Form02Component , canActivate: [AuthGuard]},
  { path: "select", component: SelectformComponent, canActivate: [AuthGuard] },
  { path: "regis-success", component: RegisSuccessComponent },
  { path: "checkregis", component: CheckregisComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
