import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

	read(key: string, type: 'object' | 'string' = 'string'): any {
		let value: any;
		let data: string = localStorage.getItem(key);
		if (data) {
			switch (type) {
				case 'object': value = JSON.parse(data); break;
				case 'string': value = String(data); break;
				default:
			}
		}
		return value;
	}

	write(key: string, value: any, type: 'object' | 'string' = 'string'): void {
		setTimeout(() => {
			let data: string;
			switch (type) {
				case 'object': data = JSON.stringify(value); break;
				case 'string': data = String(value); break;
				default:
			}
			if (data) {
				localStorage.setItem(key, data);
			}
		}, 0);
	}

	remove(key: string): void {
		localStorage.removeItem(key);
	}

	clearAll(): void {
		localStorage.clear();
	}
}