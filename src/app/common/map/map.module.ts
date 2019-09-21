import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import {NgPipesModule} from 'ngx-pipes';
import { CamelizePipe } from 'ngx-pipes';
import { CommonModule } from '@angular/common';


// Working with: npm install rxjs-compat --save

import { MapService } from './map.service';

@NgModule({
  declarations: [
   MapComponent
  ],
  exports:[
      MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDbJGdv9-3VoZVVtQL5Ij-xuMdntT-hVYs'
      }),
      NgPipesModule,
      CommonModule
],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule { }
 