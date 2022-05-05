/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { KeyValueMap } from './types';
import { titleCase } from './utils';

export const create = (
	tag: string,
	classes: string[] = [],
	attributes: object = {},
	parent: HTMLElement | null = null
): any => {
	const element = document.createElement(tag);

	classes.forEach((cls) => {
		element.classList.add(cls);
	});

	for (const [key, value] of Object.entries(attributes)) {
		element.setAttribute(key, value);
	}

	if (parent) {
		parent.appendChild(element);
	}

	return element;
};

export const table = (data: KeyValueMap[]): HTMLElement => {
	const table = create('table', [], {});

	const header = create('tr', [], {}, table);

	Object.keys(data[0]).forEach((key) => {
		create('th', [], {}, header).textContent = titleCase(key);
	});

	data.forEach((row) => {
		const tr = create('tr', [], {}, table);

		Object.values(row).forEach((value) => {
			create('td', [], {}, tr).textContent = value;
		});
	});

	return table;
};
