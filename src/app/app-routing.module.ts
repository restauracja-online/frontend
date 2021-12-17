import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserViewComponent} from './user-view/user-view.component';
import {AdminGuard} from './admin.guard';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
