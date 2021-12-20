import { Component  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  subscription: Subscription;
  

  constructor(

    // private shared: SharedService,
    private data  : DataService,
    private activatedRoute: ActivatedRoute,
    private route: Router

    private shared: SharedService,
   
    ) { }

  ngOnInit(): void {
    
    // this.user = this.shared.getuser();
    // console.log('USER',this.user);
    
    // this.user = this.shared.getuser();
    this.subscription = this.data.currentMessage.subscribe((message: any) => {
      this.user = message;
      console.log("app component ", this.user);
    });

    this.isAdmin();
  }

  isLogged(){
    return this.user.username.length > 0 ;
  }

  logout(){
    this.data.changeMessage({
      category: "",
      city: "",
      connect: false,
      createdAt: "",
      email: "",
      password: "",
      phone: "",
      updatedAt: "",
      user_img: "",
      username: "",
      __v: 0,
      _id: "",
    });
    this.shared.setuser({})
  }

  
  isAdmin(){
    return this.route.url === "/admin/index" ? true : false;
  }

  isBanned(){
    return this.user.connect;
  }
}
