import { AfterViewInit, Directive, ElementRef, Input, Renderer2, Sanitizer, SecurityContext } from '@angular/core';

declare var $: any; // jQuery
declare var _: any; // lodash

@Directive({
	selector: '[gridStackItem]'
})

export class GridStackItemDirective implements AfterViewInit {
	@Input() x: number;
	@Input() y: number;
	@Input() w: number;
	@Input() h: number;
	@Input() customid: string;
	@Input() content: string;

	@Input() minWidth: number;
	@Input() canResize: boolean;

	private toMake = true;

	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
		private sanitizer: Sanitizer
	) {
		renderer.setAttribute(el.nativeElement, "class", "grid-stack-item");
	}

	ngAfterViewInit() {
		let renderer = this.renderer;
		let nativeElement = this.el.nativeElement;
		let cannotResize: string = this.canResize ? "yes" : "no";

		let elementText: string = `<div class="grid-stack-item-content">${this.content ? this.content : nativeElement.innerHTML}</div>`;
		nativeElement.innerHTML = elementText;

		renderer.setAttribute(nativeElement, "data-gs-x", String(this.x));
		renderer.setAttribute(nativeElement, "data-gs-y", String(this.y));
		renderer.setAttribute(nativeElement, "data-gs-width", String(this.w));
		renderer.setAttribute(nativeElement, "data-gs-height", String(this.h));
		if (this.customid) {
			renderer.setAttribute(nativeElement, "data-custom-id", String(this.customid));
		}
		if (this.minWidth) {
			renderer.setAttribute(nativeElement, "data-gs-min-width", String(this.minWidth));
		}
		if (cannotResize == "yes") {
			renderer.setAttribute(nativeElement, "data-gs-no-resize", cannotResize);
		}

		const parent = $(this.el.nativeElement).parent();
		const grid = parent.data('gridstack');
		if (grid && this.toMake) {
			grid.makeWidget(this.el.nativeElement);
			this.toMake = false;
		}
	}
}