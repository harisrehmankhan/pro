import { Component, OnInit, Input } from '@angular/core';
import { DestservService } from '../shared/destserv.service';
import { Rental } from '../shared/rental.model';


@Component({
  selector: 'tourmet-dest-list',
  templateUrl: './dest-list.component.html',
  styleUrls: ['./dest-list.component.scss']
})
export class DestListComponent implements OnInit {

  rentals: Rental[] = [];

    
  // dests: any[] = [];


  constructor(private rentalService: DestservService) { }

  ngOnInit() {

    const rentalObservable = this.rentalService.getdest();

    rentalObservable.subscribe(
      (data:Rental[])=>{
          this.rentals=data;
      },

      (err)=>{
        
      },

      ()=>{
        
      }
    );

  }

}
