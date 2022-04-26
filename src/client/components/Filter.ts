/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { create, queryAll } from '../core';

export class FilterComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		this.init();
	}

	private init(): void {
		const input = create(
			'input',
			[],
			{ type: 'text', placeholder: 'Filter' },
			this
		);

		input.addEventListener('keyup', () => {
			this.filter(input);
		});
	}

	private filter(input: HTMLInputElement): void {
		const filters = input.value.toLowerCase().split(' ');
		const items = queryAll('.card') as HTMLElement[];

		items.forEach((item) => {
			var hide = false;

			for (var i = 0; i < filters.length; i++) {
				if (item.textContent.toLowerCase().indexOf(filters[i]) == -1) {
					hide = true;
					break;
				}
			}

			item.style.display = hide ? 'none' : '';
		});
	}
}

customElements.define('rc-filter', FilterComponent);
