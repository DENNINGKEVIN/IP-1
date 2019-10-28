import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Simplicity is the ultimate sophistication', 'Frankline Baraka', new Date(2019, 1, 19)),
    new Quote(2, 'If you judge people, you have no time to love them', 'Mother Theresa', new Date(2019, 1, 19)),
    new Quote(3, 'A great man is always willing to be little', 'Ralph Waldo Emerson', new Date(2019, 1, 19)),
    new Quote(4, 'The greatest wealth is to live content with little', 'Plato', new Date(2019, 8, 18)),
  ];
  constructor() { }

  ngOnInit() {
  }

}
