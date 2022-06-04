import { Component, OnInit } from '@angular/core';
import { MeowFactsService } from '../../services/meow-facts.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-meow-facts',
    templateUrl: './meow-facts.component.html',
    styleUrls: ['./meow-facts.component.scss']
})
export class MeowFactsComponent implements OnInit {
    public meowFacts: Observable<string>[] = [];
    private INITIAL_NUMBER_OF_FACTS = 5;

    constructor(private meowFactsService: MeowFactsService) {
    }

    ngOnInit(): void {
        for (let i = 0; i < this.INITIAL_NUMBER_OF_FACTS; i++) {
            this.meowFacts.push(this.meowFactsService.getFact());
        }
    }

    onScroll(): void {
        this.meowFacts.push(this.meowFactsService.getFact());
    }
}
