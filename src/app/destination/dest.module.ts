import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';

// Map MODULE
import {MapModule} from '../common/map/map.module';
// 

import { DestListComponent } from './dest-list/dest-list.component';


import { DestinationComponent } from './destination.component';
// import { DestListComponent } from './dest-list/dest-list.component';
import { DestListItemComponent } from './dest-list-item/dest-list-item.component';


import { DestservService } from './shared/destserv.service';
import { ListingsComponent } from '../listings/listings.component';
import { DestDetailComponent } from './dest-detail/dest-detail.component';


const routes: Routes = [
    {path: 'dest',component:DestinationComponent,
     children: [
         {path:'',component:DestListComponent},
         {path:":destid",component:DestDetailComponent}
     ]
        },
   
          ] 


@NgModule({
	declarations: [
    DestinationComponent,
    DestListComponent,
    DestListItemComponent,
    DestDetailComponent
    // DestListItemComponent,
],
    imports: [CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule,
        MapModule
    ],
    providers :[DestservService]

})

export class DestModule {}