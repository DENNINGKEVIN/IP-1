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
  toggleDescription(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }

  removeQuote(wantToDelete, index){
    if(wantToDelete){
      let choice = confirm(`Are you sure you want to delete the quote ${this.quotes[index].name}`)
      if (choice){
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.creationDate = new Date(quote.creationDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
