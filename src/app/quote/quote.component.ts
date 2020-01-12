import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Be the reason somebody smiles today', 'Roy T', 'Winnie', new Date(2017, 11, 1), 0, 0),
    new Quote(2, 'We were born to be real not to be perfect', 'Ralph Marston', 'Winnie', new Date(2014, 8, 1), 0, 0),
    new Quote(3,'Let life surprise you','David Richo','winnie',new Date(2012,2,3),0,0)
  ];

  like(){} 0;
  dislike(){};

  likeNo(index){
    this.quotes[index].likeNo+=1;
  }

  dislikeNo(index){
    this.quotes[index].dislikeNo+=1;
  }

  
  QuoteDelete(index){
    this.quotes.splice(index, 1)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    quote.complete = new Date(quote.complete)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}



