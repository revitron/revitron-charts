/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { App, html, svg } from '../core';

export class ThemeToggleComponent extends HTMLElement {
	private darkMode: boolean = false;

	constructor() {
		super();
	}

	connectedCallback(): void {
		this.classList.add('navbar__theme-toggle');

		const localScheme = localStorage.getItem('color-scheme');
		this.darkMode = localScheme === 'dark';

		if (!localScheme) {
			this.darkMode =
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches;
		}

		document.documentElement.classList.toggle('dark', this.darkMode);

		this.addEventListener('click', () => {
			this.darkMode = !this.darkMode;

			localStorage.setItem(
				'color-scheme',
				this.darkMode ? 'dark' : 'light'
			);

			document.documentElement.classList.toggle('dark', this.darkMode);

			this.render();
			App.root.renderView();
		});

		this.render();
	}

	render(): void {
		this.innerHTML = html`
			${svg(
				'M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z'
			)}
			${this.darkMode
				? svg(
						'M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'
				  )
				: svg(
						'M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z'
				  )}
		`;

		this.setAttribute('title', 'Toggle Dark Mode');
	}
}

customElements.define('rc-theme-toggle', ThemeToggleComponent);
