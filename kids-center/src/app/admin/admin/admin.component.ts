import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: any;
  subscription: Subscription;
  form  : FormGroup;
  result: any;
  services: any;
  events: any;

  constructor(
    private formAdminSignIn: FormBuilder,
    private http: HttpClient,
    private data: DataService,
  ) { }

  ngOnInit(): void {
    this.form = this.formAdminSignIn.group({
      username: '',
      password: ''
    });

    this.subscription = this.data.currentMessage.subscribe((message: any) => {
      this.user = message;
    });
  }

  isLogged() {
    return this.user.username.length > 0;
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:8000/auth/signin', this.form.getRawValue())
      .subscribe({
        next: Response => {
          console.log(Response);
          this.user = Response;
          // this.shared.setuser(this.result);

          //get all users
          this.http.get('http://localhost:8000/user/admin')
            .subscribe({
              next: Response => {
                console.log("users : ", Response);
                this.services = Response;
              },
              error: error => {
                console.log("error admin users : ", error);
              }
            });

          //get all events
          this.http.get('http://localhost:8000/events')
            .subscribe({
              next: Response => {
                console.log("events : ", Response);
                this.events = Response;
              },
              error: error => {
                console.log("error admin events : ", error);
              }
            });
        },
        error: error => {
          this.result = "Incorrect username/password";
          console.log(this.result);
        }
      });
  }

  logout() {
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
  }

  banned(user:any){
    var user = user;
    user.connect = !user.connect;
    this.http.put(`http://localhost:8000/user/${user._id}`,user)
      .subscribe({
        next: Response => {
          console.log("users : ", Response);
          this.services = Response;
        },
        error: error => {
          console.log("error admin users : ", error);
        }
      });
  }

}
