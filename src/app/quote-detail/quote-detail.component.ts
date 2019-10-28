import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;

  @Output() wantToDelete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.wantToDelete.emit(complete);
  }

  addUpVote(){
    this.quote.upVote++;
  }

  addDownVote(){
    this.quote.downVote++;
  }

  constructor() { }

  ngOnInit() {
  }

}
