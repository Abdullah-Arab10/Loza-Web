import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
})
export class CardTitleComponent implements OnInit {
  ngOnInit(): void {}
  @Input() className?: string;
  @Input() title?: string;
}
