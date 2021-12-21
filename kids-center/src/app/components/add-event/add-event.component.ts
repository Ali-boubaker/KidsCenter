import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  form  : FormGroup;
  selectedValue: string;
  

  constructor(private formAdd: FormBuilder,
    private http: HttpClient,private route     : Router  ) { }
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

  ngOnInit(): void {
    this.form = this.formAdd.group({
      title:'',
      eventBy: '',
    location: '',
    city: '', 
    contact: '',
    date:'',
    event_img:"",
    description:"",
    fees:0,
    comments:[]
    })
  }
  submit(): void {
    console.log('form',this.form.getRawValue());
    this.http.post('http://localhost:8000/events/events', this.form.getRawValue())
      .subscribe({
        next: Response => {
        console.log(Response)
        this.route.navigateByUrl('/events');
          // this.shared.setuser(this.result);
          
        },
        error: error   => {
   
          console.log(error);
        }
      });
  }
  image_preview(){
    return this.form.getRawValue().event_img
  }
}
