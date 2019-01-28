import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DummyTextComponent } from './dummy-text/dummy-text.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    DummyTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
