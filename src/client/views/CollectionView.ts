/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { App, create, html, KeyValueMap } from '../core';
import { BaseView } from './BaseView';

export class CollectionView extends BaseView {
	protected create(config: KeyValueMap): HTMLElement {
		const view = create('div', [], {});
		const { collection } = config;

		view.innerHTML = html`
			<rc-navbar></rc-navbar>
			<main>
				<rc-collection collection="${collection}"></rc-collection>
			</main>
		`;

		return view;
	}
}
