/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { App, query, titleCase, URLParams } from '../core';
import { CollectionView } from '../views/CollectionView';
import { DashboardView } from '../views/DashboardView';

export class RootComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		this.classList.add('container');
		this.init();

		window.addEventListener('popstate', this.renderView.bind(this));
	}

	update(collection: string = ''): void {
		history.pushState(null, null, `?collection=${collection}`);

		(query('rc-filter input') as HTMLInputElement).value = '';

		this.renderView();
	}

	private async init(): Promise<void> {
		await App.init(this);

		this.renderView();
	}

	renderView(): void {
		const search = new URLSearchParams(window.location.search);

		if (search.get(URLParams.collection)) {
			const collection = search.get(URLParams.collection);

			document.title = `${titleCase(collection)} — ${
				App.settings.data.project_name
			}`;
			new CollectionView(this, { collection });

			return;
		}

		document.title = `${App.settings.data.project_name}`;
		new DashboardView(this);
	}
}

customElements.define('rc-root', RootComponent);
