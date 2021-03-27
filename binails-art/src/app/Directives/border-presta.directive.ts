import { DirectiveAst } from "@angular/compiler";
import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appBorderPresta]'
})

export class BorderPrestaDirective {
    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#E2467F';
    private defaultHeight: number = 550;
    private defaultWidth: number = 360;


    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
        this.setWidth(this.defaultWidth);
    }

    @Input('appBorderPresta') borderColor?: string;
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
    }

    private setBorder(color: string) {
        let border = 'solid 3px' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }

    private setWidth(width: number) {
        this.el.nativeElement.style.width = width + 'px';
    }

}