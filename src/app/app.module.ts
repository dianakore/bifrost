import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavsidebarComponent } from './navsidebar/navsidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProgrammComponent } from './programm/programm.component';
import { JoinComponent } from './join/join.component';
import { PartnersComponent } from './partners/partners.component';
import { InfoComponent } from './info/info.component';
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatVideoModule} from "mat-video";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import { FlexLayoutModule  } from "@angular/flex-layout";



@NgModule({
  declarations: [
    AppComponent,
    NavsidebarComponent,
    HomeComponent,
    GalleryComponent,
    ProgrammComponent,
    JoinComponent,
    PartnersComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatVideoModule,
    MatStepperModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

