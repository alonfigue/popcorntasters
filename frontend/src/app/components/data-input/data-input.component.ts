import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss'],
})
export class DataInputComponent {

  @Input() type: string;
  @Input() placeholder: string;

  constructor() { }
 }
