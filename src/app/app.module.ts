import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TimeCountPipe } from './time-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    QuotesComponent,
    TimeCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
