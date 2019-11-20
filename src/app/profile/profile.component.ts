import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  result;blogs;

  constructor(private router:Router,private httpservice:UserServiceService,private http:HttpClient) { }
  uname;lname;fname;email;pass;followers;following;
  ngOnInit() {
    this.profile();
  }

  profile(){
    this.httpservice.getinfo().subscribe(res=>{
      this.result=res;
      console.log(this.result);
    });
    this.httpservice.getmyblogs().subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
    });
    this.httpservice.getfollowers().subscribe(res=>{
      this.followers=res;
      console.log(this.followers);
    });

    this.httpservice.getfollowing().subscribe(res=>{
      this.following=res;
      console.log(this.following);
    });
  }
  editProfile(){
    this.router.navigate(['edit']);

  }
  delete(id){
    this.httpservice.deleteblog(id).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
    })
  }
  logout(){
    sessionStorage.removeItem('token');
  this.httpservice.isLoggedIn(false);
  this.router.navigate(['login']);
  }
 view(id){
   this.router.navigate(['/blog/',id]);
 }

 unfollow(id){
  this.httpservice.unfollow(id).subscribe(res=>{
    this.router.navigate(['myblogs']);
  });
}

remove(id){
  this.httpservice.remove(id).subscribe(res=>{
    this.router.navigate(['profile']);
  });
}
url="http://localhost:8090/profile/update";  
 updateprofile(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.put(this.url,this.result,{headers}).subscribe(data=>{
      console.log(data);
      sessionStorage.setItem('token' , btoa( this.result.uname + this.result.pass));
      alert("profile updated");
    });
  }
  
}
