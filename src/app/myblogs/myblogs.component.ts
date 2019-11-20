import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {
  result;blogs;

  constructor(private router:Router,private httpservice:UserServiceService,private http:HttpClient) { }
  uname;lname;fname;email;pass;
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
  }
  editProfile(){
    this.router.navigate(['edit']);
  }
  logout(){
    sessionStorage.removeItem('token');
  this.httpservice.isLoggedIn(false);
  this.router.navigate(['login']);
  }


  delete(id){
    this.httpservice.deleteblog(id).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
    })
  }
url="http://localhost:8090/profile/update";  
 updateprofile(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.put(this.url,this.result,{headers}).subscribe(data=>{
      console.log(data);
      alert("profile updated");
    });
  }
  
}


  