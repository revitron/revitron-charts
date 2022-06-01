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
	table,
	html,
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

		const history = await this.history(collection);

		[
			'syncTimes',
			'syncCountByUser',
			'syncTimeSumByUser',
			'transactionsByUser',
		].forEach((item) => {
			if (history[item]) {
				grid.appendChild(history[item]);
			}
		});

		fields.forEach((field: string) => {
			lineChart(grid, field, fieldDataSets[field]);
		});

		if (history.table) {
			grid.appendChild(history.table);
		}
	}

	private async history(collection: string): Promise<KeyValueMap> {
		const elements: KeyValueMap = {};

		const historyCollection = collection.replace(
			'snapshots__',
			'history__'
		);

		const sortY = (array: KeyValueMap[]) => {
			return array.sort((a, b) => {
				return a.y < b.y ? 1 : -1;
			});
		};

		const history = await request(
			`/items/${historyCollection}?limit=500&sort=-start_time`
		);

		const transactionsByUser = await request(
			`/items/${historyCollection}?aggregate[sum]=unique_transactions&groupBy[]=user&limit=500`
		);

		const syncTimeSumByUser = await request(
			`/items/${historyCollection}?aggregate[sum]=sync_time&groupBy[]=user&limit=500`
		);

		const syncCountByUser = await request(
			`/items/${historyCollection}?aggregate[count]=id&groupBy[]=user&limit=500`
		);

		if (history.data) {
			elements.table = create('div', ['card', 'grid__item-span-row'], {});
			elements.table.innerHTML = html`
				<div class="card__title">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						fill="currentColor"
						class="bi bi-clock-history"
						viewBox="0 0 16 16"
					>
						<path
							d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
						/>
						<path
							d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
						/>
						<path
							d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
						/>
					</svg>
					<span>Sync History</span>
				</div>
			`;

			elements.table.appendChild(table(history.data));

			const syncTime: KeyValueMap[] = [];

			history.data.forEach((item: KeyValueMap) => {
				syncTime.push({
					id: item.id,
					x: `${item.start_time} (${item.user})`,
					y: item.sync_time,
				});
			});

			const syncTimeSorted = syncTime.sort((a, b) => {
				return a.id > b.id ? 1 : -1;
			});

			const avgSyncTime = await request(
				`/items/${historyCollection}?aggregate[avg]=sync_time`
			);

			elements.syncTimes = barChart(
				null,
				`Sync Times &mdash; Average ${Math.round(
					avgSyncTime?.data[0].avg?.sync_time
				)} min.`,
				syncTimeSorted,
				true
			);
		}

		if (syncCountByUser.data) {
			const syncCountByUserData: KeyValueMap[] = [];

			syncCountByUser.data.forEach((item: KeyValueMap) => {
				syncCountByUserData.push({
					x: item.user,
					y: parseInt(item.count.id),
				});
			});

			const syncCountByUserDataSorted = sortY(syncCountByUserData);

			elements.syncCountByUser = barChart(
				null,
				'Number of Syncs by User',
				syncCountByUserDataSorted
			);
		}

		if (syncTimeSumByUser.data) {
			const syncTimeSumByUserData: KeyValueMap[] = [];

			syncTimeSumByUser.data.forEach((item: KeyValueMap) => {
				syncTimeSumByUserData.push({
					x: item.user,
					y: parseInt(item.sum.sync_time),
				});
			});

			const syncTimeSumByUserDataSorted = sortY(syncTimeSumByUserData);

			elements.syncTimeSumByUser = barChart(
				null,
				'Summarized Sync Time by User',
				syncTimeSumByUserDataSorted
			);
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

			elements.transactionsByUser = barChart(
				null,
				'Transactions by User',
				transactionsByUserDataSorted
			);
		}

		return elements;
	}
}

customElements.define('rc-collection', CollectionComponent);
