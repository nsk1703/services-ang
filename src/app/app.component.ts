import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService]
})
// Dans Le providers du parent AppComponer, "AccountService" concerne aussi tous ses composants fils
// donc les deux autres composants. Je peux donc supprimer leur providers à eux
export class AppComponent implements OnInit{
  accounts: {name: string, status: string} [] = [];

  constructor(private accountService: AccountService){}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
