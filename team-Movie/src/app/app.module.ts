import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TrendsComponent } from './components/trends/trends.component';
import { UserItemsComponent } from './components/user-items/user-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SideNavComponent,
    TrendsComponent,
    UserItemsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// 2bcc213a018771c2c0a6a360671493d1
// https://api.themoviedb.org/3/movie/550?api_key=2bcc213a018771c2c0a6a360671493d1
//