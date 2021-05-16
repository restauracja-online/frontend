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
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';
import { UserMenuModalComponent } from './modals/user-menu-modal/user-menu-modal.component';
import { LoginFormModalComponent } from './modals/login-form-modal/login-form-modal.component';
import {FormsModule} from '@angular/forms';
import { SignupFormModalComponent } from './modals/signup-form-modal/signup-form-modal.component';
import { MatchingPasswordValidatorDirective } from './directives/matching-password-validator.directive';
import {HttpClientModule} from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    RestaurantHeaderComponent,
    ContentComponent,
    FoodCategoriesComponent,
    CartComponent,
    CartItemComponent,
    MenuItemComponent,
    MenuComponent,
    IngredientsComponent,
    IngredientsListComponent,
    MenuCategoriesComponent,
    UserMenuModalComponent,
    LoginFormModalComponent,
    SignupFormModalComponent,
    MatchingPasswordValidatorDirective,
    UserViewComponent,
    AdminViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
