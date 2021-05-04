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

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    RestaurantHeaderComponent,
    ContentComponent,
    FoodCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
