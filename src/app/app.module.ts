import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
 // Angular Material
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatButtonModule, MatCheckboxModule} from '@angular/material';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material';
 import {MatCardModule} from '@angular/material/card';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';

//Routes
import { RouterModule, Routes } from '@angular/router';
import { SearchPipe } from './search.pipe';


const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'add', component: AddNewContactComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddNewContactComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    //Angular material
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    //Routes
    RouterModule.forRoot(routes)
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
