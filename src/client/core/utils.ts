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

export const titleCase = (str: string): string => {
	return str
		.replace('_value', '')
		.replace(/(?!^)([A-Z]+)/g, ' $1')
		.replace(/_/g, ' ')
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

export const mb = (bytes: number): number => {
	return Math.round(bytes / 1024 / 1024);
};

export const day = (timestamp: string) => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		year: '2-digit',
		month: 'numeric',
		day: 'numeric',
	};

	return new Date(Date.parse(timestamp)).toLocaleDateString('en-US', options);
};
