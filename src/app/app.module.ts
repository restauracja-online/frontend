import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RestaurantHeaderComponent } from './restaurant-header/restaurant-header.component';
import { ContentComponent } from './content/content.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { UserMenuModalComponent } from './modals/user-menu-modal/user-menu-modal.component';
import { LoginFormModalComponent } from './modals/login-form-modal/login-form-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupFormModalComponent } from './modals/signup-form-modal/signup-form-modal.component';
import { MatchingPasswordValidatorDirective } from './directives/matching-password-validator.directive';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import {TokenInterceptor} from './token.interceptor';
import { AdminProductViewComponent } from './admin-product-view/admin-product-view.component';
import { AdminIngredientsAddComponent } from './admin-ingredients-add/admin-ingredients-add.component';
import { AdminIngredientsViewComponent } from './admin-ingredients-view/admin-ingredients-view.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddressFormModalComponent } from './modals/address-form-modal/address-form-modal.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { OrdersComponent } from './modals/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    RestaurantHeaderComponent,
    ContentComponent,
    FoodCategoriesComponent,
    CartComponent,
    CartItemComponent,
    IngredientsComponent,
    IngredientsListComponent,
    UserMenuModalComponent,
    LoginFormModalComponent,
    SignupFormModalComponent,
    MatchingPasswordValidatorDirective,
    UserViewComponent,
    AdminViewComponent,
    AdminProductViewComponent,
    AdminIngredientsAddComponent,
    AdminIngredientsViewComponent,
    AdminProductAddComponent,
    AddressFormModalComponent,
    ProductViewComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
