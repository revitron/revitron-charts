/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { KeyValueMap } from './types';

export const html = (strings: any, ...values: any[]): string => {
	let raw = strings.raw;

	let result = '';

	values.forEach((value, i) => {
		let section = raw[i];

		if (section.endsWith('$')) {
			value = htmlSpecialChars(value);
			section = section.slice(0, -1);
		}

		result += section + value;
	});

	result += raw[raw.length - 1];

	return result;
};

const htmlSpecialChars = (value: string): string => {
	const chars: KeyValueMap = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;',
	};

	return value.replace(/[&<>"']/g, (char: string) => {
		return chars[char];
	});
};

export const query = (
	selector: string,
	element: Document | HTMLElement = document
): HTMLElement => {
	return element.querySelector(selector);
};

export const queryAll = (
	selector: string,
	element: HTMLElement | Document = document
): HTMLElement[] => {
	return Array.from(element.querySelectorAll(selector));
};

export const svg = (path: string | string[], viewBox: string = '0 0 16 16') => {
	let content: string;

	if (path instanceof Array) {
		const pathArray: string[] = [];

		path.forEach((p) => {
			pathArray.push(`<path d="${p}" />`);
		});

		content = pathArray.join('');
	} else {
		content = `<path d="${path}" />`;
	}

	return html`
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="1em"
			height="1em"
			fill="currentColor"
			viewBox="${viewBox}"
		>
			${content}
		</svg>
	`;
};

export const titleCase = (str: string): string => {
	return str
		.replace(/^(are|len|vol|num)__/, '')
		.replace(/(?!^)([A-Z]+)/g, ' $1')
		.replace(/_/g, ' ')
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

export const mb = (bytes: number): string => {
	return Math.round(bytes / 1024 / 1024)
		.toString()
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const day = (timestamp: string) => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		year: '2-digit',
		month: 'short',
		day: 'numeric',
	};

	return new Date(Date.parse(timestamp)).toLocaleDateString('en-US', options);
};
