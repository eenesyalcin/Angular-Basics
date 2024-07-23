import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
  standalone: true
})
export class RenklendirDirective {

  // @Input("renklendir") renk: string | undefined;
  // @Input("name") isim: string | undefined;

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") method1(){
    // this.el.nativeElement.innerHTML = this.isim;
    this.el.nativeElement.style = "color: red";
    console.log("Mouse elementin üzerine geldi.");
    // console.log(this.renk);
  }

  @HostListener("mouseleave") method2(){
    // this.el.nativeElement.innerHTML = "DIRECTIVE";
    this.el.nativeElement.style = "color: black";
    console.log("Mouse elementin üzerinden ayrıldı.");
  }

}
