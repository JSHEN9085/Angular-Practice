import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent //for every component inside AppComponent, must declared it here, name is same as the name declared at line 5
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
