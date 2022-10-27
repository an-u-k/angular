import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserEntryComponent } from './users/user-entry/user-entry.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserEntryComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() ,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
