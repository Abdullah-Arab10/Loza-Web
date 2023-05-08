import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  showFiller = false;
  expanded = false;

  constructor(private route: Router) {}

  ngOnInit(): void {}
  isExpanded() {
    this.expanded = !this.expanded;

    this.route.isActive;
  }
  setActiveClass(route: string) {
    let first = this.route.url.indexOf('/') + 1;
    let last = this.route.url.lastIndexOf('/');
    let path = this.route.url.substring(first, last);
    route = route.substring(0, route.indexOf('/'));
    return path == route;
  }

  sideBarItems = [
    {
      title: 'Home',
      icon: '../../../../assets/icons/home-light.svg',
      route: '/home',
      subItems: [],
    },
    {
      title: 'Products',
      icon: '../../../../assets/icons/diamond-light.svg',
      route: 'products/',
      subItems: [
        {title: 'Overview', route: 'products/overview'},

        {title: 'Create Product', route: 'products/create'},

        {title: 'Products List', route: 'products/list'},
      ],
    },

    {
      title: 'Customers',
      icon: '../../../../assets/icons/customers-light.svg',
      route: '/customers',
      subItems: [
        {title: 'Overview', route: 'customers/overview'},

        {title: 'Customers List', route: 'customers/list'},

        {title: 'Scheduled', route: 'customers/scheduled'},
      ],
    },
    {
      title: 'Properties',
      icon: '../../../../assets/icons/property-light.svg',
      route: '/properties',
      subItems: [
        {title: 'Overview', route: 'properties/overview'},
        {title: 'Create Property', route: 'property/create'},
        {title: 'Properties List', route: 'properties/list'},
      ],
    },
    {
      title: 'Orders',
      icon: '../../../../assets/icons/orders-light.svg',
      route: 'orders/overview',
      subItems: [
        {title: 'Overview', route: 'orders/overview'},

        {title: 'Orders List', route: 'orders/list'},
      ],
    },
    {
      title: 'Income',
      icon: '../../../../assets/icons/income-light.svg',
      route: 'income/dashboard',
      subItems: [
        {title: 'Overview', route: 'income/overview'},

        {title: 'Earning', route: 'income/earning'},
        {title: 'Refunds', route: 'income/refunds'},
      ],
    },
  ];
  stop(event: Event) {
    event.stopPropagation();
  }
}
