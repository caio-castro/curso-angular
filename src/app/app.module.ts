import { CursoInfoComponent } from './Cursos/curso-info.component';
import { Error404Component } from './error 404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { EstrelaCompoent } from './estrela/estrela.component';
import { CursoListComponent } from './Cursos/curso-lista.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursoListComponent,
    EstrelaCompoent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CursoInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'CURSOS', component: CursoListComponent,
      },

      {
        path: 'curso/info/:id', component: CursoInfoComponent,
      },
      {
        path: '',redirectTo: 'CURSOS',pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
