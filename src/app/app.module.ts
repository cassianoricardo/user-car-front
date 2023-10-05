import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgIf} from '@angular/common';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { TabListComponent } from './views/home/tab-list/tab-list.component';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { TabCarComponent } from './views/home/tab-car/tab-car.component';
import { TabUserComponent } from './views/home/tab-user/tab-user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CarAddEditComponent } from './views/car-add-edit/car-add-edit.component';
import { UserAddEditComponent } from './views/user-add-edit/user-add-edit.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthenticatorComponent } from './views/authenticator/authenticator.component';
import { httpInterceptorProviders } from './http-interceptors';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {MatCardModule} from '@angular/material/card';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabListComponent,
    TabCarComponent,
    TabUserComponent,
    CarAddEditComponent, 
    UserAddEditComponent, 
    AuthenticatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    NgIf,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [httpInterceptorProviders,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

