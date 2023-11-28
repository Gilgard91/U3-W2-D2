import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AttiviComponent } from './components/attivi/attivi.component';
import { InattiviComponent } from './components/inattivi/inattivi.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'attivi',
    component: AttiviComponent,
  },

  {
    path: 'inattivi',
    component: InattiviComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AttiviComponent,
    InattiviComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
