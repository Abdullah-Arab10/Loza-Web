import {Component, OnInit} from '@angular/core';
import {ProductService} from 'src/app/core/services/http/product.service';
import {CATEGORIES} from 'src/app/shared/constants/global.constants';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  columns = [
    /*
     "name": "string",
    "description": "string",
    "price": 0,
    "category": 0,
    "color": "string",
    "colorNo": 0,
    "quantity": 0,
    "productImage": "string", */
    {name: 'Name', field: 'name', isDate: false},
    {name: 'Description', field: 'description', isDate: false},
    {name: 'Price', field: 'price', isDate: false},
    {name: 'category', field: 'category', isDate: false},
    {name: 'Quantity', field: 'quantity', isDate: false},
  ];
  products: any[];
  categories = CATEGORIES;
  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._productService.getProducts().subscribe((res: any) => {
      res.data.products.map((product: any) => {
        this.categories.forEach((category) => {
          category.value == product.category
            ? (product.category = category.viewValue)
            : 'other';
        });
      });
      this.products = res.data.products;
    });
  }
  deleteItems(items: any) {
    let itemsForDelete = items?.map((item: any) => item.id);
    this._productService.deleteProducts(itemsForDelete).subscribe((res) => {
      this.ngOnInit();
    });
  }
}
