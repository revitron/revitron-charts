/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { RootComponent } from '../components/Root';
import { request, requestCollections } from './request';
import { KeyValueMap } from './types';

export class App {
	private static _root: RootComponent;

	private static _state: KeyValueMap = {};

	static get root(): KeyValueMap {
		return this._root;
	}

	static get state(): KeyValueMap {
		return this._state;
	}

	static get collections(): KeyValueMap {
		return this._state.collections;
	}

	static get settings(): KeyValueMap {
		return this._state.settings;
	}

	static async init(root: RootComponent): Promise<void> {
		this._state.collections = await requestCollections();
		this._state.settings = await request('/settings');
		this._root = root;
	}
}
