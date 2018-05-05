import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GotHttpService } from './got-http-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'view', component: ViewComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', component: NotFoundComponent}

    ])
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

