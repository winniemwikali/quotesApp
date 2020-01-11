import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Be the reason somebody smiles today', 'Roy T', 'Winnie', new Date(2020, 11, 1), 0, 0),
    new Quote(2, 'We were born to be real not to be perfect', 'Ralph Marston', 'Winnie', new Date(2020, 8, 1), 0, 0)
    
  ]

  likeNo = 0;
  dislikeNo = 0;

  like(index){
    this.quotes[index].likeNo+=1;
  }

  dislike(index){
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



// quoteDelete(isComplete, index){
//   let QuoteDelete = confirm('Delete this'+ this.quotes[index].quote)

//   if (QuoteDelete) {
//     this.quotes.splice(index, 1)
//   }
// }
