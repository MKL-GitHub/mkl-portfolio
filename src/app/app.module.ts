import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { PageLayoutComponent } from './components/layouts/page-layout/page-layout.component';
import { MenuBurgerComponent } from './components/menu-burger/menu-burger.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
// import { } from 'angular-gtag';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectsPageComponent,
    HeaderComponent,
    ProjectCardComponent,
    FormatDatePipe,
    FooterComponent,
    PageLayoutComponent,
    MenuBurgerComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // AngularG
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
