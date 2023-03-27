import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './services/account.service';
import { loggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  // Dans ce provider du AppModule, il peut être utilisé dans tous les composants
  providers: [AccountService, loggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
