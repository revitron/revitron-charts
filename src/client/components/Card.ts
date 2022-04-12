/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { App, day, html, Item, mb, requestItems, titleCase } from '../core';

export class CardComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		const collection = this.getAttribute('collection');

		this.classList.add('card', 'card--link');
		this.render(collection);

		this.addEventListener('click', () => {
			App.root.update(collection);
		});
	}

	async render(collection: string): Promise<void> {
		const data = (await requestItems(collection)) as Item[];
		const last = data[data.length - 1];
		const date = day(last.timestamp);

		this.innerHTML = html`
			<div class="card__icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
					/>
				</svg>
			</div>
			<div class="card__title">${titleCase(collection)}</div>
			<div class="card__info">
				${mb(last.model_size)} mb
				<br />
				${date}
			</div>
		`;
	}
}

customElements.define('rc-card', CardComponent);
