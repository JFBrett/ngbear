import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from './app.routing';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumboComponent} from './components/jumbotron/jumbo.component';
import {BgComponent} from './components/bg/bg.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
                  NavbarComponent, 
                  JumboComponent,
                  BgComponent,
                  HomeComponent,
                  AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
