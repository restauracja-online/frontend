import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserViewComponent} from './user-view/user-view.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {AdminProductViewComponent} from './admin-product-view/admin-product-view.component';
import {AdminIngredientsAddComponent} from './admin-ingredients-add/admin-ingredients-add.component';
import {AdminGuard} from './admin.guard';
import {AdminIngredientsViewComponent} from './admin-ingredients-view/admin-ingredients-view.component';
import {AdminProductAddComponent} from './admin-product-add/admin-product-add.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserViewComponent},
  {path: 'admin', component: AdminViewComponent, canActivate: [AdminGuard]},
  {path: 'admin/product', component: AdminProductViewComponent, canActivate: [AdminGuard]},
  {path: 'admin/ingredients', component: AdminIngredientsViewComponent, canActivate: [AdminGuard]},
  {path: 'admin/ingredients/add', component: AdminIngredientsAddComponent, canActivate: [AdminGuard]},
  {path: 'admin/product', component: AdminProductViewComponent, canActivate: [AdminGuard]},
  {path: 'admin/product/add', component: AdminProductAddComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
