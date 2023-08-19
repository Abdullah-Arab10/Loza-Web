import {HttpClient} from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

interface columnsType {
  name: string;
  field: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit, OnChanges {
  @Input() columns = [];
  @Input() title = '';
  @Input() data: any[];

  @Input() items: any[] = [];

  @Input() filterFields = [];
  @Input() returnOrdrer = false;
  @Output() deleteItemsEvent = new EventEmitter();
  @Output() itemsEventEmitter = new EventEmitter();
  selectedItems = [];

  representatives: any[] = [];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    /*     this.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        (customer) => (customer.date = new Date(customer.date))
      );
    }); */

    this.representatives = [
      {name: 'Amy Elsner', image: 'amyelsner.png'},
      {name: 'Anna Fali', image: 'annafali.png'},
      {name: 'Asiya Javayant', image: 'asiyajavayant.png'},
      {name: 'Bernardo Dominic', image: 'bernardodominic.png'},
      {name: 'Elwin Sharvill', image: 'elwinsharvill.png'},
      {name: 'Ioni Bowcher', image: 'ionibowcher.png'},
      {name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png'},
      {name: 'Onyama Limba', image: 'onyamalimba.png'},
      {name: 'Stephen Shaw', image: 'stephenshaw.png'},
      {name: 'Xuxue Feng', image: 'xuxuefeng.png'},
    ];

    this.statuses = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'},
    ];
  }
  ngOnChanges(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  deleteItems() {
    this.deleteItemsEvent.emit(this.selectedItems);
    this.selectedItems = [];
  }
  returnRequest(item: any, accept: boolean) {
    this.itemsEventEmitter.emit({item, accept});
  }
  getSeverity(status: any) {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;
    }
    return;
  }

  getData() {
    return [
      {
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz',
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png',
        },
        balance: 70663,
        test: 'hello test',
      },
      {
        id: 1001,
        name: 'Josephine Darakjy',
        country: {
          name: 'Egypt',
          code: 'eg',
        },
        company: 'Chanay, Jeffrey A Esq',
        date: '2019-02-09',
        status: 'proposal',
        verified: true,
        activity: 0,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png',
        },
        balance: 82429,
        test: 'hello test',
      },
      {
        id: 1002,
        name: 'Art Venere',
        country: {
          name: 'Panama',
          code: 'pa',
        },
        company: 'Chemel, James L Cpa',
        date: '2017-05-13',
        status: 'qualified',
        verified: false,
        activity: 63,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
        balance: 28334,
        test: 'hello test',
      },
      {
        id: 1003,
        name: 'Lenna Paprocki',
        country: {
          name: 'Slovenia',
          code: 'si',
        },
        company: 'Feltz Printing Service',
        date: '2020-09-15',
        status: 'new',
        verified: false,
        activity: 37,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png',
        },
        balance: 88521,
        test: 'hello test',
      },
      {
        id: 1004,
        name: 'Donette Foller',
        country: {
          name: 'South Africa',
          code: 'za',
        },
        company: 'Printing Dimensions',
        date: '2016-05-20',
        status: 'proposal',
        verified: true,
        activity: 33,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
        balance: 93905,
        test: 'hello test',
      },
      {
        id: 1005,
        name: 'Simona Morasca',
        country: {
          name: 'Egypt',
          code: 'eg',
        },
        company: 'Chapman, Ross E Esq',
        date: '2018-02-16',
        status: 'qualified',
        verified: false,
        activity: 68,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
        balance: 50041,
        test: 'hello test',
      },
    ];
  }

  getCustomersMini() {
    return Promise.resolve(this.getData().slice(0, 5));
  }

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  }

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  }

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {
    return this.http
      .get<any>('https://www.primefaces.org/data/customers', {params: params})
      .toPromise();
  }
}
