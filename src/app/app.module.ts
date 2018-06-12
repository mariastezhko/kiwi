import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { GenderComponent } from './gender/gender.component';
import { RelationshipComponent } from './relationship/relationship.component';


@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    BirthdayComponent,
    GenderComponent,
    RelationshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
