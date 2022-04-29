import { RouterModule } from '@angular/router';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { ToolbarModule } from './shared/components/toolbar/toolbar.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FooterModule,
    ToolbarModule,
    RouterModule,
    AppRoutingModule
  ],
  providers:[
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
