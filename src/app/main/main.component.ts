import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  date=new Date();
  title;body;result;posts;status="private";search;
   constructor(private blogservice:UserServiceService,private router:Router) { }
 
   ngOnInit() {
     this.blogservice.getinfo().subscribe(res=>{
       this.result=res;
       console.log(this.result);
     });
 
     this.blogservice.getposts().subscribe(res=>{
       this.posts=res;
       console.log(this.posts);
     });
   }
 
   post(){
   alert("posted");
   const blog = {
     body:this.body,
     title: this.title,
     create_date: this.date,
     status:this.status
   };
   console.log(blog);
   this.blogservice.addblog(blog).subscribe(res=>{
     console.log('added to database');
     console.log(res);
   })
   }
 
   logout(){
     sessionStorage.removeItem('token');
   this.blogservice.isLoggedIn(false);
   this.router.navigate(['login']);
   }
 
   view(id){
     this.router.navigate(['main/post/',id]);
   }
 
   unfollow(id){
     this.blogservice.unfollow(id).subscribe(res=>{
       this.router.navigate(['main']);
     });
   }
   searchUser(key){
    if(key){
    this.blogservice.search(key).subscribe(res=>{
      this.search=res;
      console.log(res);
    })
  }
  else{
    this.search=[];
  }
  }

  searchblog(key){
    if(key){
    this.blogservice.searchblog(key).subscribe(res=>{
      this.posts=res;
      console.log(res);
    })
  }
  else{
    this.ngOnInit();
  }
  }

  userprofile(id){
    this.router.navigate(['people/',id]);
  }
 
 }
 