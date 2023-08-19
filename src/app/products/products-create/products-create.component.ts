import {JsonPipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from 'src/app/core/services/http/product.service';
import {NotificationService} from 'src/app/core/services/themes/notification.service';
import {CATEGORIES, COLORS} from 'src/app/shared/constants/global.constants';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss'],
})
export class ProductsCreateComponent implements OnInit {
  productForm: FormGroup;
  image: string;
  imageFiles: File[] = [];
  colors = COLORS;
  categories = CATEGORIES;
  constructor(
    private productService: ProductService,
    private _notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
      imageFile: new FormControl(),
      category: new FormControl(),
      color: new FormControl(),
      width: new FormControl(0),
      height: new FormControl(0),
      length: new FormControl(0),
    });
  }
  setPreviewImage(event: string) {
    this.image = event;
  }

  multiSelect(event: File) {
    const file: File | null = event as File;

    this.imageFiles.push(file);
  }
  multiDelete(event: any) {
    const reader = new FileReader();
    let images: any = [];
    this.imageFiles = [];
    for (let image of this.imageFiles) {
      reader.onload = (e: any) => {
        if (reader?.result != event) {
          images.push(image);
        }
      };
      this.imageFiles = images;
    }
  }
  concatProductDimensions() {
    let values = this.productForm.value;
    let dimensions = ` ${values.length} x ${values.width} x ${values.height}`;
    return dimensions;
  }
  submit() {
    let productDimensions = this.concatProductDimensions();
    let productFormValues = this.productForm.value;
    let createForm = new FormData();

    createForm.append('name', productFormValues.name);
    createForm.append('description', productFormValues.description);
    createForm.append('price', productFormValues.price);
    createForm.append('category', productFormValues.category.value);
    createForm.append('quantity', productFormValues.quantity);
    createForm.append('ImageFile', productFormValues.imageFile);
    createForm.append('color', productFormValues.color.viewValue);
    createForm.append('colorNo', productFormValues.color.value);
    createForm.append('ProductDimensions', productDimensions);
    this.imageFiles.forEach((image) => {
      createForm.append('ImageFiles', image);
    });

    this.productService.createProduct(createForm).subscribe((res) => {
      this._notificationService.showSuccess('Product Added Successfully');
    });
  }
}
