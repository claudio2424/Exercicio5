import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[diretiva]'
})
export class DiretivaDirective {

  constructor(
    private el: ElementRef
    ) {
      this.el.nativeElement.style.backgroundColor = 'blueviolet'}
      

  
    }
