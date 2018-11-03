import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  users: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.http.get('http://localhost:3000/api/users').subscribe(data => this.users = data);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required]
    });

  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.http.post('http://localhost:3000/api/users', this.registerForm.value).subscribe();
      this.registerForm.reset();
    }
  }
}
