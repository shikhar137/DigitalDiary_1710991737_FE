import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { AddblogComponent } from './addblog/addblog.component';
import { TestComponent } from './test/test.component';
import { PostComponent } from './post/post.component';
import { PeopleComponent } from './people/people.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent},
  {path:'main',component:MainComponent},
  {path:'myblogs',component:MyblogsComponent},
  {path:'addblog',component:AddblogComponent},
  {path:'myblogs/editBlog/:blogid',component:EditBlogComponent},
  {path:'test',component:TestComponent},
  {path:'main/post/:id',component:PostComponent},
  {path:'people/:id',component:PeopleComponent}
  

 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
