import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UcfirstPipe } from './ucfirst.pipe';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe,
    TestPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
     { provide: LOCALE_ID, useValue: 'it-IT'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
