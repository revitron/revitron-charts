/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import {
	lineChart,
	KeyValueMap,
	requestItems,
	day,
	create,
	titleCase,
} from '../core';

export class CollectionComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		const collection = this.getAttribute('collection');

		this.init(collection);
	}

	private async init(collection: string): Promise<void> {
		const items = await requestItems(collection);
		const { fieldDataSets, fields } = this.prepareDataSets(items);
		const title = create('h1', [], {}, this);
		const grid = create('div', ['grid', 'grid--large'], {}, this);

		title.textContent = titleCase(collection);

		fields.forEach((field: string) => {
			lineChart(grid, field, fieldDataSets[field]);
		});
	}

	private prepareDataSets(items: KeyValueMap[]): KeyValueMap {
		const last = items[items.length - 1];
		const fields = Object.keys(last).filter((field) => {
			return !field.match(/(id|timestamp)/);
		});

		const fieldDataSets: KeyValueMap = {};

		fields.forEach((field) => {
			const data: KeyValueMap = {};

			items.forEach((item: KeyValueMap) => {
				data[day(item.timestamp)] = item[field];
			});

			fieldDataSets[field] = data;
		});

		return { fieldDataSets, fields };
	}
}

customElements.define('rc-collection', CollectionComponent);
