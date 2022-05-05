/**
 * Revitron Charts
 *
 * Copyright (c) 2022 Marc Anton Dahmen <https://marcdahmen.de>
 * MIT License
 */

import { create, KeyValueMap } from './';
import {
	Chart,
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip,
	SubTitle,
	ChartDataset,
	ScaleOptionsByType,
} from 'chart.js';
import { day, html, svg, titleCase } from './utils';
import { App } from './app';

Chart.register(
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip,
	SubTitle
);

const lineChartDataSet = (data: KeyValueMap): KeyValueMap => {
	const style = getComputedStyle(document.body);
	const borderColor = style.getPropertyValue('--card-info-clr');
	const backgroundColor = style.getPropertyValue('--card-bg-chart');

	const options = {
		data,
		backgroundColor,
		borderColor,
		fill: true,
		borderWidth: 2,
		hoverBorderWidth: 4,
		pointRadius: 4,
		pointHoverRadius: 10,
		pointBorderWidth: 1,
		pointHoverBorderWidth: 1,
		tension: 0.2,
	};

	return options;
};

const options = (): KeyValueMap => {
	const style = getComputedStyle(document.body);
	const color = style.getPropertyValue('--card-info-clr');
	const gridColor = style.getPropertyValue('--card-grid-clr');

	return {
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					color: gridColor,
				},
				ticks: {
					color: color,
				},
			},
			y: {
				grid: {
					color: gridColor,
				},
				ticks: {
					color: color,
					precision: 0,
				},
			},
		},
	};
};

const chartTitle = (field: string): string => {
	const prefixMatch = field.match(/^[a-z]{3}/);

	if (!prefixMatch) {
		return titleCase(field);
	}

	const prefix = prefixMatch[0];
	let icon: string | string[];

	switch (prefix) {
		case 'len':
			icon =
				'M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z';
			break;

		case 'are':
			icon =
				'M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z';
			break;

		case 'vol':
			icon =
				'M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z';
			break;

		case 'num':
			icon =
				'M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z';
			break;

		default:
			icon = [
				'M12 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
				'M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4Zm-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96A3.001 3.001 0 0 0 11 7Z',
				'M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Z',
			];
	}

	return html`
		${svg(icon)}
		<span>${titleCase(field)}</span>
	`;
};

export const barChart = (
	container: HTMLElement,
	title: string,
	data: KeyValueMap[],
	fullWidth: boolean = false
): HTMLElement => {
	const cls = ['card'];
	let height = '50vh';

	if (fullWidth) {
		cls.push('grid__item-span-2');
		height = '25vh';
	}

	const wrapper = create('div', cls, {}, container);
	const style = getComputedStyle(document.body);
	const backgroundColor = style.getPropertyValue('--card-info-clr');

	create('div', ['card__title'], {}, wrapper).innerHTML = chartTitle(title);

	const canvas = create(
		'canvas',
		['chart__canvas'],
		{ width: '100%', height },
		wrapper
	);

	new Chart(canvas, {
		type: 'bar',
		data: {
			datasets: [
				{
					data,
					backgroundColor,
				},
			],
		},
		options: options(),
	});

	return wrapper;
};

export const lineChart = (
	container: HTMLElement,
	field: string,
	dataSets: KeyValueMap
): void => {
	const wrapper = create('div', ['card'], {}, container);
	create('div', ['card__title'], {}, wrapper).innerHTML = chartTitle(field);

	const canvas = create(
		'canvas',
		['chart__canvas'],
		{ width: '100%', height: '50vh' },
		wrapper
	);

	new Chart(canvas, {
		type: 'line',
		data: {
			datasets: [lineChartDataSet(dataSets) as ChartDataset],
		},
		options: options(),
	});
};

export const prepareDataSets = (items: KeyValueMap[]): KeyValueMap => {
	const last = items[items.length - 1];
	const fields = Object.keys(last).filter((field) => {
		return !field.match(/(id|timestamp)/);
	});

	const fieldDataSets: KeyValueMap = {};

	fields.forEach((field) => {
		const data: KeyValueMap = {};

		items.forEach((item: KeyValueMap) => {
			data[day(item.timestamp)] = convertUnit(item[field], field);
		});

		fieldDataSets[field] = data;
	});

	return { fieldDataSets, fields };
};

const convertUnit = (value: number, field: string): number => {
	const prefixMatch = field.match(/^[a-z]{3}/);
	const prefix = prefixMatch[0];
	let converted = value;

	if (App.displayUnit == 'meter') {
		switch (prefix) {
			case 'len':
				converted = value * 0.3048;
				break;

			case 'are':
				converted = value * 0.092903;
				break;

			case 'vol':
				converted = value * 0.0283168;
				break;

			case 'mod':
				converted = value / 1024 / 1024;
				break;
		}

		return converted;
	}

	if (prefix == 'mod') {
		converted = value / 1024 / 1024;
	}

	return converted;
};
