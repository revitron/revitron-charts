/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { App, URLParams } from '../core';
import { CollectionView } from '../views/CollectionView';
import { DashboardView } from '../views/DashboardView';

export class RootComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		this.init();

		window.addEventListener('popstate', this.renderView.bind(this));
	}

	update(collection: string = ''): void {
		history.pushState(null, null, `?collection=${collection}`);

		this.renderView();
	}

	private async init(): Promise<void> {
		await App.init(this);

		this.renderView();
	}

	private renderView(): void {
		const search = new URLSearchParams(window.location.search);

		if (search.has(URLParams.collection)) {
			new CollectionView(this, {
				collection: search.get(URLParams.collection),
			});

			return;
		}

		new DashboardView(this);
	}
}

customElements.define('rc-root', RootComponent);
