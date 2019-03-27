import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDirective } from './post.directive';
import { PostFormComponent } from './post-form/post-form.component';
import { from } from 'rxjs';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostDirective,
    PostFormComponent,
    UploadImageComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
