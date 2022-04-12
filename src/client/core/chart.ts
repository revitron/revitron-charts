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
import { titleCase } from './utils';

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
				},
			},
		},
	};
};

export const lineChart = (
	container: HTMLElement,
	field: string,
	dataSets: KeyValueMap
): void => {
	const wrapper = create('div', ['card'], {}, container);
	create('div', ['card__title'], {}, wrapper).textContent = titleCase(field);

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
