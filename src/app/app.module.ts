import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {NavigationSidebarComponent} from "./navigation-sidebar/navigation-sidebar.component";
import { SillySortingComponent } from './silly-sorting/silly-sorting.component';
import { BubbleSortingComponent } from './bubble-sorting/bubble-sorting.component';
import { ShakeSortingComponent } from './shake-sorting/shake-sorting.component';
import { HomeComponent } from './home/home.component';
import routes from "./routes";


@NgModule({
  declarations: [
    AppComponent,
    NavigationSidebarComponent,
    SillySortingComponent,
    BubbleSortingComponent,
    ShakeSortingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
