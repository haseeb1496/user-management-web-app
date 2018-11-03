import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as Chart from 'chart.js/src/chart.js';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {

  cityList: Array<string> = [];
  countList: Array<number> = [];
  BarChart = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/users/city/find').subscribe((res: any) => {
      res.forEach(val => {
        this.cityList.push(val._id);
        this.countList.push(val.count);
      });

      this.BarChart = new Chart('barChart', {
        type: 'bar',
        data: {
          labels: this.cityList,
          datasets: [{
            label: 'People Count',
            data: this.countList,
            borderWidth: 1
          }]

        },
        options: {
          title : {
            text: 'Bar Chart',
            display: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }

}
