import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';

import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { AddblogComponent } from './addblog/addblog.component';
import { TestComponent } from './test/test.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    MainComponent,
    PostComponent,
      EditBlogComponent,
      MyblogsComponent,
      AddblogComponent,
      TestComponent,
      PeopleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
