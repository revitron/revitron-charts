/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

export interface KeyValueMap {
	[key: string | number]: any;
}

export interface Collection {
	collection: string;
}

export interface Item {
	model_size: number;
	timestamp: string;
	id: number;
}
