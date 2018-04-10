export interface IGridStackItem {
	X: number;
	Y: number;
	Height: number;
	Width: number;
	CardId: string;
	Content: string;
}

export interface IGridStackItemResizeEvent {
	newHeight: number;
	newWidth: number;
	CardId: string;
}
