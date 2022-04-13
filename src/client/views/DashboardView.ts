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
		const grid = create('div', ['grid'], {});

		App.collections.forEach((item: Collection) => {
			create('rc-card', [], { collection: item.collection }, grid);
		});

		return grid;
	}
}
