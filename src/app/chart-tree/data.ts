import { Dimension } from './entity';

export let rawData: Array<any> = [
		{
			time: "2010",
			marketValue: 100,
			name: "p1",
			type: "t1"
		},
		{
			time: "2010",
			marketValue: 120,
			name: "p1",
			type: "t1"
		},
		{
			time: "2011",
			marketValue: 300,
			name: "p2",
			type: "t1"
		},
		{
			time: "2010",
			marketValue: 50,
			name: "p1",
			type: "t2"
		},
		{
			time: "2010",
			marketValue: 80,
			name: "p2",
			type: "t3"
		},
		{
			time: "2011",
			marketValue: 200,
			name: "p2",
			type: "t3"
		},
		{
			time: "2010",
			marketValue: 150,
			name: "p6",
			type: "t3"
		}
	];
export let metaData: Array<any> = [
		{
			name: 'time',
			dimension: Dimension.Time
		},
		{
			name: 'marketValue',
			dimension: Dimension.Value
		},
		{
			name: 'name',
			dimension: Dimension.StaticProperty
		},
		{
			name: 'type',
			dimension: Dimension.StaticProperty
		}
	];

export let reduceSeq: Array<any> = [
	{
		name: 'type',
		dimension: Dimension.StaticProperty
	},
	{
		name: 'name',
		dimension: Dimension.StaticProperty
	},
	{
		name: 'time',
		dimension: Dimension.Time
	}
];