import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ProgrammComponent} from "./programm/programm.component";
import {JoinComponent} from "./join/join.component";
import {InfoComponent} from "./info/info.component";
import {PartnersComponent} from "./partners/partners.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'prgramm', component: ProgrammComponent },
  { path: 'join', component: JoinComponent },
  { path: 'info', component: InfoComponent },
  { path: 'partners', component: PartnersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
