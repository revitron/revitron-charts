/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { App, create, KeyValueMap } from '../core';
import { BaseView } from './BaseView';

export class CollectionView extends BaseView {
	protected create(config: KeyValueMap): HTMLElement {
		const { collection } = config;
		return create('rc-collection', [], { collection });
	}
}
