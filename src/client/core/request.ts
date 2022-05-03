/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { KeyValueMap } from './types';

export const request = async (route: string): Promise<KeyValueMap> => {
	const url = `api/?${route}`;
	const response = await fetch(url);
	const data = await response.json();

	return data;
};

export const requestCollections = async () => {
	const collections = (await request('/collections')) as {
		data: KeyValueMap[];
	};

	const data = collections.data.sort((a, b) => {
		return a.collection > b.collection ? 1 : -1;
	});

	return data.filter((item: { collection: string }) => {
		return item.collection?.match(/^snapshots__/i);
	});
};

export const requestItems = async (collection: string) => {
	const items = (await request(
		`/items/${collection}?sort=-timestamp&limit=250`
	)) as {
		data: KeyValueMap[];
	};

	return items.data.reverse();
};
