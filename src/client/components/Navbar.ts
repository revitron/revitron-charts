/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { create, html } from '../core';

export class NavbarComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		const home = `${window.location.origin}${window.location.pathname}`;

		this.classList.add('navbar');

		create('a', ['navbar__icon'], { href: home }, this).innerHTML = html`
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 460 445"
				style="enable-background:new 0 0 460 445;"
				xml:space="preserve"
				fill="currentColor"
			>
				<path
					fill="hsl(215, 6%, 94%)"
					d="M229.49,0L0,132.32v265.65l81.5,47.36l81.5-47.36v-76.4l141.49,80.72L386,356.02v-86.05l74-43v-94.66L229.49,0
		z M229.51,17.3L437.5,136.69l-148.06,86.04l74.13,42.07l-59.13,35.16L170.5,222.65l149.04-86.02l-90.07-51.64L81.5,170.98
		l-59.03-34.3L229.51,17.3z M237,106.6l52.46,30.08L237,166.95V106.6z M15,389.34V149.68l59,34.28v239.65L15,389.34z M148,389.34
		l-59,34.28V183.97l133-77.28v68.93l-74,42.71V389.34z M163,235.64l134,77.34v67.76L163,304.3V235.64z M312,380.77v-67.85l59-35.08
		v69.45L312,380.77z M379.33,256.5l-59.77-33.92L445,149.69v68.65L379.33,256.5z"
				/>
			</svg>
		`;
	}
}

customElements.define('rc-navbar', NavbarComponent);
