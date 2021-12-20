import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  posts: any = [];
  user: any;
  selectedValue: string;
  city: any;
  form  : FormGroup;

  constructor(
    private shared: SharedService,
    private http: HttpClient,
    private route: Router,
    private formcity: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formcity.group({
   
    city: '', 
   
    })
    this.user = this.shared.getuser();
    console.log(this.user);
    this.http
      .get('http://localhost:8000/events')

      .subscribe({
        next: (Response) => {
          console.log('response', Response);
          this.posts = Response;
          console.log('here', this.posts);
        },
        error: (error) => console.log('error', error),
      });
  }
 
  user_category() {
    if(this.user)
    {return this.user.category === 'provider';}
    else{return false}
  }

  addPost() {
    this.route.navigateByUrl('/addEvent');
  }
  comments(post: any) {
    if(this.user){
    this.shared.setevent(post);
    this.route.navigateByUrl('/comments');
    }
    else{
      this.route.navigateByUrl('/signin');
    }
  }

  states: string[] = [
    'Tunis',
    'Ariana',
    'Ben arous',
    'Manouba',
    'Sousse',
    'Sfax',
    'Gabes',
    'Médenine',
    'Mahdia',
    'Béja',
    'Bizerte',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kef',
    'Monastir',
    'Nabeul',
    'Sidi Bouzid',
    'Siliana',
    'Tataouine',
    'Tozeur',
    'Zaghouan',
    'Kébili',
  ];
  onfilter() {
    console.log('city',this.form.getRawValue());
    
 var city=this.form.getRawValue().city
    this.http.post("http://localhost:8000/events/filter",this.form.getRawValue())

      .subscribe({
        next: (Response) => {
          console.log('response', Response);
          this.posts = Response;
          console.log('here', this.posts);
          this.route.navigateByUrl('/events');
        },
        error: (error) => console.log('error', error),
      });
  }
}
