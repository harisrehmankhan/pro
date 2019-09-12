import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestservService } from '../shared/destserv.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'tourmet-dest-detail',
  templateUrl: './dest-detail.component.html',
  styleUrls: ['./dest-detail.component.css']
})
export class DestDetailComponent implements OnInit {

  currentId:string;
  rental:Rental;

  constructor(private route: ActivatedRoute, private rentalService:DestservService) { }

  ngOnInit() {
    // this.rental = new Rental();
    this.route.params.subscribe(
      (params)=>{
        // console.log(params); 
        // this.currentId=params['destid'];
        this.getRental(params['destid']);
      })
  }

  getRental(rentalid:string){
this.rentalService.getRentalById(rentalid).subscribe(
  (rental:Rental)=>{
    this.rental = rental;
  });
    }
  }


// }
