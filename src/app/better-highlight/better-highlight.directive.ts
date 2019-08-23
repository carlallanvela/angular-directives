import { 
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
  } from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer : Renderer2) { }
  ngOnInit() {
    // // Work on DOM
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  // mouseenter - event
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // Work on DOM
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

    // mouseleave - event
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // Work on DOM
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
     this.backgroundColor = this.defaultColor;
  }
}
