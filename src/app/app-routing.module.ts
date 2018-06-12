import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NameComponent } from './name/name.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { GenderComponent } from './gender/gender.component';
import { RelationshipComponent } from './relationship/relationship.component';

const routes: Routes = [
  { path: 'name',component: NameComponent },
  { path: 'birthday',component: BirthdayComponent },
  { path: 'gender',component: GenderComponent },
  { path: 'relationship',component: RelationshipComponent },
  { path: '', pathMatch: 'full', redirectTo: 'name' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
