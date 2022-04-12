/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { KeyValueMap } from '../core';

export abstract class BaseView {
	constructor(container: HTMLElement, config: KeyValueMap = {}) {
		container.innerHTML = '';
		container.appendChild(this.create(config));
	}

	protected abstract create(config: KeyValueMap): HTMLElement;
}
