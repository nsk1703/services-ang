import { Injectable, EventEmitter } from "@angular/core";
import { loggingService } from "./logging.service";

// Permet d'inserer un autre service dans celui
// Il est inserer dans le recepteur et non dans le service a injecter
@Injectable()
export class AccountService {

    constructor(private loggingService: loggingService){}

    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusChanged = new EventEmitter<string>();
    
    accountAdded(name: string, status: string) {
        this.accounts.push({name: name, status: status});
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status)
    }
}