import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id;blog;comment;data;body;title;date;
  constructor(private route :ActivatedRoute,private httpservice:UserServiceService , private router : Router ) { }

  ngOnInit(){
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id=params.get('id');
    });
    console.log(this.id);
    this.httpservice.getblog(this.id).subscribe(res=>{
      this.blog=res;
      console.log(this.blog);
});

this.httpservice.getcomments(this.id).subscribe(res=>{
  this.comment=res;
  console.log(this.comment);
});

const blog = {
  body:this.body,
  title: this.title,
  create_date: this.date,
};
console.log(blog);
this.httpservice.addblog(blog).subscribe(res=>{
  console.log('added to database');
  console.log(res);
})
  }


  addcomment(id){
    console.log(id);
    const data = {
      body:this.body,
      createDate: this.date
    };
    console.log(data);
  this.httpservice.addcomment(this.id,data).subscribe(res=>{
    this.comment=res;
    console.log(this.comment);
    this.ngOnInit();
  });
  }

delete(id){
  this.httpservice.deletecomment(this.id).subscribe(res=>{
    this.comment=res;
    console.log(this.comment);
  });
}
logout(){
  sessionStorage.removeItem('token');
this.httpservice.isLoggedIn(false);
this.router.navigate(['login']);
}

}