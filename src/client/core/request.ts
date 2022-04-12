/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

export const request = async (route: string): Promise<object> => {
	const url = `api/?${route}`;
	const response = await fetch(url);
	const data = await response.json();

	return data;
};

export const requestCollections = async () => {
	const collections = (await request('/collections')) as { data: object[] };
	const data = collections.data;

	return data.filter((item: { collection: string }) => {
		return !item.collection?.match(/^directus_/i);
	});
};

export const requestItems = async (collection: string) => {
	const items = (await request(`/items/${collection}`)) as {
		data: object[];
	};

	return items.data;
};
