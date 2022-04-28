import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './shared/components/toolbar/toolbar.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule
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
