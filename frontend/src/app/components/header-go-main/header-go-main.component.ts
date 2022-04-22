import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-go-main',
  templateUrl: './header-go-main.component.html',
  styleUrls: ['./header-go-main.component.scss'],
})
export class HeaderGoMainComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
