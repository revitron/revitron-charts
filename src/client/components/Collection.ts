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
	request,
	barChart,
	KeyValueMap,
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

		await this.history(collection, grid);

		fields.forEach((field: string) => {
			lineChart(grid, field, fieldDataSets[field]);
		});
	}

	private async history(
		collection: string,
		grid: HTMLElement
	): Promise<void> {
		const historyCollection = collection.replace(
			'snapshots__',
			'history__'
		);

		const sortY = (array: KeyValueMap[]) => {
			return array.sort((a, b) => {
				return a.y < b.y ? 1 : -1;
			});
		};

		const history = await request(`/items/${historyCollection}`);

		const transactionsByUser = await request(
			`/items/${historyCollection}?aggregate[sum]=unique_transactions&groupBy[]=user`
		);
		const syncsByUser = await request(
			`/items/${historyCollection}?aggregate[count]=id&groupBy[]=user`
		);

		if (history.data) {
			const syncTime: KeyValueMap[] = [];

			history.data.forEach((item: KeyValueMap) => {
				syncTime.push({
					id: item.id,
					x: `${item.start_time} (${item.user})`,
					y: item.sync_time,
				});
			});

			const syncTimeSorted = syncTime.sort((a, b) => {
				return a.id < b.id ? 1 : -1;
			});

			barChart(grid, 'Sync Times (min)', syncTimeSorted, true);
		}

		if (syncsByUser.data) {
			const syncsByUserData: KeyValueMap[] = [];

			syncsByUser.data.forEach((item: KeyValueMap) => {
				syncsByUserData.push({
					x: item.user,
					y: parseInt(item.count.id),
				});
			});

			const syncsByUserDataSorted = sortY(syncsByUserData);

			barChart(grid, 'Syncs by User', syncsByUserDataSorted);
		}

		if (transactionsByUser.data) {
			const transactionsByUserData: KeyValueMap[] = [];

			transactionsByUser.data.forEach((item: KeyValueMap) => {
				transactionsByUserData.push({
					x: item.user,
					y: parseInt(item.sum.unique_transactions),
				});
			});

			const transactionsByUserDataSorted = sortY(transactionsByUserData);

			barChart(
				grid,
				'Transactions by User',
				transactionsByUserDataSorted
			);
		}
	}
}

customElements.define('rc-collection', CollectionComponent);
