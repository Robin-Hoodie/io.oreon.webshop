import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[oreonDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') private open: boolean;

  constructor() { }

  @HostListener('click') toggleOpen() {
    this.open = !this.open;
  }

}
