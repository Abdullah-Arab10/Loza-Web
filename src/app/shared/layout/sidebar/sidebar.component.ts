import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {Router} from '@angular/router';
import {LayoutService} from '../layout.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('sidebarTrigger', [
      // To add a cool "enter" animation for the sidebar
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('1s ease-in', style({transform: 'translateY(0%)'})),
      ]),

      // To define animations based on trigger actions
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  showFiller = false;
  expanded = false;
  isOpenForMobile = false;
  isMobile = false;
  layout$: Subscription;
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
      route: 'products/create',
      subItems: [
        /*   {title: 'Overview', route: 'products/overview'}, */

        {title: 'Create Product', route: 'products/create'},

        {title: 'Products List', route: 'products/list'},
      ],
    },

    {
      title: 'Customers',
      icon: '../../../../assets/icons/customers-light.svg',
      route: 'customers/list',
      subItems: [
        /*         {title: 'Overview', route: 'customers/overview'}, */

        {title: 'Customers List', route: 'customers/list'},

        {title: 'Money Transfer', route: 'customers/transfer'},
      ],
    },
    /*   {
      title: 'Properties',
      icon: '../../../../assets/icons/property-light.svg',
      route: '/properties',
      subItems: [
        {title: 'Overview', route: 'properties/overview'},
        {title: 'Create Property', route: 'properties/create'},
        {title: 'Properties List', route: 'properties/list'},
      ],
    }, */
    {
      title: 'Orders',
      icon: '../../../../assets/icons/orders-light.svg',
      route: 'orders/list',
      subItems: [
        /*    {title: 'Overview', route: 'orders/overview'}, */

        {title: 'Orders List', route: 'orders/list'},

        {title: 'Returns List', route: 'orders/returns-list'},
      ],
    },
    /*   {
      title: 'Income',
      icon: '../../../../assets/icons/income-light.svg',
      route: 'income/dashboard',
      subItems: [
        {title: 'Overview', route: 'income/overview'},

        {title: 'Earning', route: 'income/earning'},
        {title: 'Refunds', route: 'income/refunds'},
      ],
    }, */
  ];
  constructor(private route: Router, private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.mobileSidebar();
    this.checkMobileScreen();
  }
  isExpanded() {
    this.expanded = !this.expanded;
    this.route.isActive;
  }
  toggleSidebarForMobile() {
    this.layoutService.openSidebar();
    this.isOpenForMobile = !this.isOpenForMobile;
    this.route.isActive;
  }
  setActiveClass(route: string) {
    let first = this.route.url.indexOf('/') + 1;
    let last = this.route.url.lastIndexOf('/');
    let path = this.route.url.substring(first, last);
    route = route.substring(0, route.indexOf('/'));
    return path == route;
  }
  stop(event: Event) {
    event.stopPropagation();
  }
  navigate(route: string) {
    this.route.navigate([route]);
  }
  mobileSidebar() {
    this.layout$ = this.layoutService.sidebarState$.subscribe((state) => {
      this.isOpenForMobile = state;
    });
  }
  checkMobileScreen() {
    window.addEventListener('resize', (event) => {
      this.setMobileScreen();
      if (document.body.clientWidth >= 768) {
      }
    });
    this.setMobileScreen();
  }
  setMobileScreen() {
    document.body.clientWidth <= 768
      ? (this.isMobile = true)
      : (this.isMobile = false);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.layout$.unsubscribe();
  }
}
