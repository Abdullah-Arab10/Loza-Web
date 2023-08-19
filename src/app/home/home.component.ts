import {Component, OnInit} from '@angular/core';
import {HomeService} from '../core/services/http/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  firstActive = true;
  columns = [
    {name: 'Name', field: 'name', isDate: false},
    {name: 'Description', field: 'description', isDate: false},
    {name: 'Price', field: 'price', isDate: false},
    {name: 'category', field: 'category', isDate: false},
    {name: 'Quantity', field: 'quantity', isDate: false},
  ];
  statisticsValues: any;
  constructor(private _homeService: HomeService) {}
  ngOnInit(): void {
    this.getStatistics();
  }
  toggleCardActivation() {
    this.firstActive = !this.firstActive;
  }
  getStatistics() {
    this._homeService.getStatistics().subscribe((res: any) => {
      this.statisticsValues = res.data;
    });
  }
}
