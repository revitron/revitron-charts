/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import {
	lineChart,
	requestItems,
	create,
	titleCase,
	App,
	prepareDataSets,
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
		const { fieldDataSets, fields } = prepareDataSets(items);
		const title = create('h1', [], {}, this);
		const grid = create('div', ['grid', 'grid--large'], {}, this);
		const back = create('a', [], { href: '' }, title);

		back.innerHTML = '←';
		back.addEventListener('click', (event: MouseEvent) => {
			event.preventDefault();
			App.root.update();
		});

		create('span', [], {}, title).textContent = titleCase(collection);

		fields.forEach((field: string) => {
			lineChart(grid, field, fieldDataSets[field]);
		});
	}
}

customElements.define('rc-collection', CollectionComponent);
