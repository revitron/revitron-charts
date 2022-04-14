/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { App, Collection, create, KeyValueMap } from '../core';
import { BaseView } from './BaseView';

export class DashboardView extends BaseView {
	protected create(config: KeyValueMap): HTMLElement {
		const main = create('main', [], {});

		create('h1', [], {}, main).textContent = 'Projects';

		const grid = create('div', ['grid'], {}, main);

		App.collections.forEach((item: Collection) => {
			create('rc-card', [], { collection: item.collection }, grid);
		});

		return main;
	}
}
