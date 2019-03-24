import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDirective } from './post.directive';
import { PostFormComponent } from './post-form/post-form.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostDirective,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
