import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'tourmet-dest-list-item',
  templateUrl: './dest-list-item.component.html',
  styleUrls: ['./dest-list-item.component.scss']
})
export class DestListItemComponent implements OnInit {

  @Input() rental: any;
  constructor() { }

  ngOnInit() {
  }

}
