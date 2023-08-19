import {Component, Input, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {ValidationService} from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent {
  @Input() control: string;
  @Input() form: FormGroup;
  @Input() label?: string;
  @Input() items: any;
  @Input() hasColors: boolean = false;
  selectedValue: string;

  constructor(
    private rootFormGroup: FormGroupDirective,
    private validationServicve: ValidationService
  ) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
