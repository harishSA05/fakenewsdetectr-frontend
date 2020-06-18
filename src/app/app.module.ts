import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule,MatInputModule} from '@angular/material';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
// import { GaugeModule } from 'ng-gauge';
import { LoginComponent } from './login/login.component'
import { CookieService } from 'ngx-cookie-service';
import { SignupComponent } from './signup/signup.component';
import { Paragraph2nounComponent } from './paragraph2noun/paragraph2noun.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GaugeChartModule } from 'angular-gauge-chart'
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    Paragraph2nounComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgCircleProgressModule,
    // GaugeModule     
    GaugeChartModule,
    BrowserModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })

  ],
  providers: [CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
