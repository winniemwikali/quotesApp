import { Pipe, ElementRef } from '@angular/core';

@Pipe({
  name: '[highlight]'
})
export class HighlightDirective {
  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="#834c69"
   }
}

