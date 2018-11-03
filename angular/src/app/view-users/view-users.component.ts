import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {FormGroup, FormBuilder} from '@angular/forms';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  users: any;
  userData: any;

  filterForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private chgRef: ChangeDetectorRef, private formBuilder: FormBuilder) {
    this.http.get('http://localhost:3000/api/users').subscribe(data => {
      this.userData = data;
      this.users = new MatTableDataSource(this.userData);
      this.users.sort = this.sort;
    });
  }

  displayedColumns: string[] = ['Name', 'age', 'Salary', 'Address', 'delete', 'edit'];

  delete(id: any) {
    const url = 'http://localhost:3000/api/users/' + id;
    this.http.delete(url)
      .pipe(switchMap(res => this.http.get('http://localhost:3000/api/users')))
      .subscribe(data => {
        this.users = data;
        this.chgRef.detectChanges();
      });
  }

  filter(par1, par2) {
    let params = new HttpParams();
    params = params.append('age', par1);
    params = params.append('op', par2);
    this.http.get('http://localhost:3000/api/users/', {params}).subscribe(data => {
      this.userData = data;
      this.users = new MatTableDataSource(this.userData);
      this.users.sort = this.sort;
    });
  }


  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      ageFilter: [''],
      op: ['']
    });
  }
}
