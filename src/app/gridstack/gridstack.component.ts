﻿import { Component, EventEmitter, Input, Output, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { IGridStackItem, IGridStackItemResizeEvent } from './gridstack.types';
declare var $: any; // jQuery
declare var _: any; // lodash

@Component({
	selector: 'gridStack',
	template: `
        <div *ngIf="addButtonText || saveButtonText || deleteButtonText || deleteCardButtonText">
            <button *ngIf="addButtonText && addButtonText != ''" (click)="addItem()" class='{{buttonClass}}'>{{addButtonText}}</button>
            <button *ngIf="saveButtonText && saveButtonText != ''" (click)="savePanel()"
                    class='btn-gridstack-save {{buttonClass}}'>{{saveButtonText}}
            </button>
            <button *ngIf="deleteButtonText && deleteButtonText != ''" (click)="deletePanel()"
                    class='btn-gridstack-del {{buttonClass}}'>{{deleteButtonText}}
            </button>
            <span class="card-management" hidden>
			    <button *ngIf="deleteCardButtonText && deleteCardButtonText != ''" (click)="deleteCard()"
                        class='btn-gridstack-del-card {{buttonClass}}'>{{deleteCardButtonText}}</button>
		    </span>
        </div>
        <div class="grid-stack" [attr.data-gs-width]="w" [attr.data-gs-animate]="animate">
            <ng-content></ng-content>
            <div gridStackItem
                 spellcheck="false"
                 *ngFor="let item of items"
                 [x]="item.X" [y]="item.Y" [h]="item.Height" [w]="item.Width" [customId]="item.CardId"
                 [content]="item.Content"
                 (dblclick)="onItemClick($event)">
            </div>
        </div>
	`
})

export class GridStackComponent implements AfterViewInit {

	@Input() w: number;
	@Input() animate: boolean;
	@Input() buttonClass: string = "";
	@Input() allowEditing: boolean = false;
	@Input() options: any[];
	@Input() items: IGridStackItem[];

	@Input() addButtonText: string;
	@Input() saveButtonText: string;
	@Input() deleteButtonText: string;
	@Input() deleteCardButtonText: string;

	@Output() addFunction = new EventEmitter<boolean>();
	@Output() saveFunction = new EventEmitter<any>();
	@Output() deleteFunction = new EventEmitter<boolean>();
	@Output() deleteCardFunc = new EventEmitter<number>();

	@Output() itemResize = new EventEmitter<IGridStackItemResizeEvent>();

	private isStart = true;
	private editing = false;

	constructor(private el: ElementRef,
	            private renderer: Renderer2) {
	}

	ngAfterViewInit() {
		let nativeElement = this.el.nativeElement;

		let jq = (<any>$(nativeElement).find(".grid-stack"));
		jq.gridstack(this.options);
		jq.on('gsresizestop', (event, elem) => {
			const newHeight: string = $(elem).attr('data-gs-height');
			const newWidth: string = $(elem).attr('data-gs-width');
			const id: string = $(elem).attr('data-custom-id');
			this.itemResize.emit({
				newHeight: Number(newHeight),
				newWidth: Number(newWidth),
				CardId: id
			})
		});
	}

	onItemClick(event: any) {
		const grid = $('.grid-stack').data('gridstack');
		const element = $(event.target);
		if (element.hasClass("grid-stack-item-content")) {
			if (!element.hasClass("selected-item")) {
				$(".grid-stack-item-content").removeClass("selected-item");
				element.addClass("selected-item");
				$(".card-management").show();
				if (this.allowEditing) {
					this.editing = true;
					element.attr("contenteditable", "true");
					$('.grid-stack').data('gridstack').disable();
				}
			}
			else {
				element.removeClass("selected-item");
				$(".card-management").hide();
				$('.grid-stack').data('gridstack').enable();
				element.attr("contenteditable", "false");
				this.editing = false;
			}
		}
	}

	addItem() {
		if (this.addFunction) {
			this.addFunction.emit();
		}
	}

	deletePanel() {
		if (this.deleteFunction) {
			this.deleteFunction.emit();
		}
	}

	deleteCard() {
		const selected = $(this.el.nativeElement).find(".selected-item").parent();
		if (this.deleteCardFunc) {
			let id: number = parseInt(<string>selected.attr("data-custom-id"));
			this.deleteCardFunc.emit(id);
			$('.grid-stack').data('gridstack').removeWidget(selected);
			$(".grid-stack-item-content").removeClass("selected-item");
			$(".card-management").hide();
		}
	}

	savePanel() {
		if (this.saveFunction) {
			//Get cards from view
			const jsonItems = _.map($('.grid-stack .grid-stack-item:visible'), function (el: any) {
				el = $(el);
				const node = el.data('_gridstack_node');
				return {
					customid: el.attr('data-custom-id'),
					x: node.x,
					y: node.y,
					width: node.width,
					height: node.height,
					content: el[0].firstChild.outerText
				};
			});
			this.saveFunction.emit(jsonItems);
		}
	}
}