import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngOnce]'
})
export class NgOnceDirective implements OnInit {

  @HostBinding('value') value = '';
  @HostBinding('textContent') textContent = '';

  @Input('ngOnce') content!: string;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    if (this.elementRef.nativeElement instanceof HTMLInputElement) {
      this.value = this.content;
    } else {
      this.textContent = this.content;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    const arrowKeys = (e.key === 'ArrowLeft') || (e.key === 'ArrowRight') ||
      (e.key === 'ArrowUp') || (e.key === 'ArrowDown');
    const ctrlCmdA = ((e.ctrlKey && e.key === 'a') || (e.metaKey && e.key === 'a'));
    const ctrlCmdC = ((e.ctrlKey && e.key === 'c') || (e.metaKey && e.key === 'c'));
    const shiftArrows = ((e.shiftKey && e.key === 'ArrowLeft') || (e.shiftKey && e.key === 'ArrowRight')) ||
      (e.shiftKey && e.key === 'ArrowUp') || (e.shiftKey && e.key === 'ArrowDown');
    const ctrlCmdArrows = ((e.ctrlKey && e.key === 'ArrowLeft') || (e.metaKey && e.key === 'ArrowLeft')) ||
      ((e.ctrlKey && e.key === 'ArrowRight') || (e.metaKey && e.key === 'ArrowRight')) ||
      ((e.ctrlKey && e.key === 'ArrowUp') || (e.metaKey && e.key === 'ArrowUp')) ||
      ((e.ctrlKey && e.key === 'ArrowDown') || (e.metaKey && e.key === 'ArrowDown'));

    return arrowKeys || ctrlCmdC || ctrlCmdA || shiftArrows || ctrlCmdArrows;
  }

  @HostListener('paste')
  onPaste() {
    return false;
  }
}
