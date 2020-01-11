import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
