/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { App, titleCase, URLParams } from '../core';
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

		this.renderView();
	}

	private async init(): Promise<void> {
		await App.init(this);

		this.renderView();
	}

	renderView(): void {
		const search = new URLSearchParams(window.location.search);

		if (search.has(URLParams.collection)) {
			const collection = search.get(URLParams.collection);

			document.title = `${titleCase(collection)} — Revitron Charts`;
			new CollectionView(this, { collection });

			return;
		}

		document.title = `${App.settings.data.project_name} — Revitron Charts`;
		new DashboardView(this);
	}
}

customElements.define('rc-root', RootComponent);
