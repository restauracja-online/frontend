import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RestaurantHeaderComponent } from './restaurant-header/restaurant-header.component';
import { ContentComponent } from './content/content.component';
import { UserMenuModalComponent } from './modals/user-menu-modal/user-menu-modal.component';
import { LoginFormModalComponent } from './modals/login-form-modal/login-form-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupFormModalComponent } from './modals/signup-form-modal/signup-form-modal.component';
import { MatchingPasswordValidatorDirective } from './directives/matching-password-validator.directive';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import {TokenInterceptor} from './token.interceptor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddressFormModalComponent } from './modals/address-form-modal/address-form-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    RestaurantHeaderComponent,
    ContentComponent,
    UserMenuModalComponent,
    LoginFormModalComponent,
    SignupFormModalComponent,
    MatchingPasswordValidatorDirective,
    UserViewComponent,
    AddressFormModalComponent
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
