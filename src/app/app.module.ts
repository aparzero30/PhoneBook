import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './Contact/book/book.component';
import { FormComponent } from './Contact/form/form.component';
import { EditFormComponent  } from  './Contact/edit-form/edit-form.component';
import { ContactService } from './contact.service';




import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FormComponent,
    EditFormComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
