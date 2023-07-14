import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckcardComponent } from './components/checkcard/checkcard.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { StatusPageComponent } from './components/status-page/status-page.component';
import { ReportPageComponent } from './components/report-page/report-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NumberDirective } from './components/directive-components/numbers-only.directive';
import { RouterModule } from '@angular/router';
import { ApiImplementsFunctionCheckService } from './components/functions/implement-function';
import { CheckCardService } from './services/checkcard.service';
import { CheckregisComponent } from './components/checkregis/checkregis.component';
import { Form01Component } from './components/form01/form01.component';
import { Form02Component } from './components/form02/form02.component';
import { SelectformComponent } from './components/selectform/selectform.component';
import { RegisSuccessComponent } from './components/regis-success/regis-success.component';
import { GetApiService } from './services/getApi.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    CheckcardComponent,
    AddPageComponent,
    StatusPageComponent,
    ReportPageComponent,
    PageNotFoundComponent,
    NumberDirective,
    CheckregisComponent,
    Form01Component,
    Form02Component,
    SelectformComponent,
    RegisSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    
  ],
  exports: [RouterModule],
  providers: [ ApiImplementsFunctionCheckService,GetApiService,
    CheckCardService,
      // { provide: LOCALE_ID, useFactory: getLocale },
    { provide: MAT_DATE_LOCALE, useValue: "th-TH" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
