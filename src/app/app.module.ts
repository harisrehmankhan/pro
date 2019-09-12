import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './common/header/header.component';
import { ListingsComponent } from './listings/listings.component';
import { TempComponent } from './temp/temp.component';

// import { DestinationComponent } from './destination/destination.component';

// /*/*/*/*/*/*/*/*/*/*

//Make the local module file working..

///\/\/\/\/\/\/

import { DestservService } from './destination/shared/destserv.service';

// 

/*import {DestModule} from './destination/dest.module';*/
/* */
/* */

import { DestModule } from './destination/dest.module';
import { DestListComponent } from './destination/dest-list/dest-list.component';


const routes: Routes = [
{path: '',redirectTo:'/dest',pathMatch:'full'},

// {path: '',component:ListingsComponent},
{path: 'temp',component:TempComponent},
// {path: 'dest',}
                      ] 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListingsComponent,
    TempComponent
   
  ],
  imports: [
  RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    DestModule,
  ],
  providers: [DestservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
