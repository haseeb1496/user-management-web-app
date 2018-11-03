import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  editForm: FormGroup;
  userId: string;
  newData: any;
  url: string;
  edited = false;

  constructor(private  http: HttpClient, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.userId = this.route.snapshot.params.id;

    this.url = 'http://localhost:3000/api/users/' + this.userId;

    this.http.get(this.url).subscribe((result: any) => this.editForm.setValue({
      firstName: result.firstName,
      lastName: result.lastName,
      age: result.age,
      salary: result.salary,
      city: result.city,
      address: result.address
    }));
  }

  onSave() {
    this.edited = true;
    if (this.editForm.invalid) {
      return;
    } else {
      this.newData = this.editForm.value;
      this.http.put(this.url, this.newData).subscribe();
      this.router.navigate(['/home/random']);

    }
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

}
