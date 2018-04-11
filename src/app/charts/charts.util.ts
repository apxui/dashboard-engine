import { ChartNode, Property } from "../chart-tree/entity";
import { barTooltip, barToolBox, barMarkPoint, barMarkLine } from "./bar.option";

export class ChartsUtil {
    // 2 values
    public static convertToScatterOption(_data: number[][]): any {
        return {
            xAxis: {},
            yAxis: {},
            series: [{
                symbolSize: 20,
                data: _data,
                type: 'scatter'
            }]
        };
    }
    // 3d line (v,v,t)
    public static convertTo3DLineOption(_data: number[][]): any {
        return {
            tooltip: {},
            backgroundColor: '#fff',
            visualMap: {
                show: false,
                dimension: 2,
                min: 0,
                max: 30,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            xAxis3D: {
                type: 'value'
            },
            yAxis3D: {
                type: 'value'
            },
            zAxis3D: {
                type: 'value'
            },
            grid3D: {
                viewControl: {
                    projection: 'orthographic'
                }
            },
            series: [{
                type: 'line3D',
                data: _data,
                lineStyle: {
                    width: 4
                }
            }]
        }
    }
    // 3d bar (v,v,v)
    public static convertTo3DBarOption(_data: number[][]): any {
        return {
            tooltip: {},
            visualMap: {
                max: 20,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            xAxis3D: {
                type: 'value'
                // data: hours,
                // name: 'abc'
            },
            yAxis3D: {
                type: 'value'
            },
            zAxis3D: {
                type: 'value'
            },
            grid3D: {
                boxWidth: 200,
                boxDepth: 80,
                viewControl: {
                    // projection: 'orthographic'
                },
                light: {
                    main: {
                        intensity: 1.2,
                        shadow: true
                    },
                    ambient: {
                        intensity: 0.3
                    }
                }
            },
            series: [{
                type: 'bar3D',
                data: _data.map(function (item) {
                    return {
                        value: [item[1], item[0], item[2]],
                    }
                }),
                shading: 'lambert',
        
                label: {
                    textStyle: {
                        fontSize: 16,
                        borderWidth: 1
                    }
                },
        
                emphasis: {
                    label: {
                        textStyle: {
                            fontSize: 20,
                            color: '#900'
                        }
                    },
                    itemStyle: {
                        color: '#900'
                    }
                }
            }]
        };
    }
    public static convertToTreeOption(data: ChartNode): any {
		let treeData: any = ChartsUtil.convertChartNodeToTreeNode(data);
		return {
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			toolbox: barToolBox,
			
			series: [
				{
					type: 'tree',
	
					data: [treeData],
	
					top: '1%',
					left: '7%',
					bottom: '1%',
					right: '20%',
	
					symbolSize: 7,
	
					label: {
						normal: {
							position: 'left',
							verticalAlign: 'middle',
							align: 'right',
							fontSize: 9
						}
					},
	
					leaves: {
						label: {
							normal: {
								position: 'right',
								verticalAlign: 'middle',
								align: 'left'
							}
						}
					},
	
					expandAndCollapse: false,
					animationDuration: 550,
					animationDurationUpdate: 750
				}
			]
		}
	};


    public static convertToLineOption(): any {
        return {
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
    }

    public static convertToMultiLineOption(): any {
        var colors = ['#5793f3', '#d14a61', '#675bba'];
        return {
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },

            color: colors,
        
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data:['2015 降水量', '2016 降水量']
            },
            grid: {
                top: 70,
                bottom: 50
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '降水量  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
                },
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '降水量  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name:'2015 降水量',
                    type:'line',
                    xAxisIndex: 1,
                    smooth: true,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name:'2016 降水量',
                    type:'line',
                    smooth: true,
                    data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                }]
            };
	}
	public static convertToMultiBarChartOption(reduceSeq: Array<Property>, chartNode: ChartNode, dimLabels: any, type: string): void {
		if (reduceSeq.length > 2) {
			console.warn('not support');
			return;
		}
		let labels: any = dimLabels;
		let title: string = reduceSeq.map((r: Property) => r.name).join(' ');
		let xAxisLabels: string[] = labels[0]; // x axis label, should be the first dimension
		let subBarLabels: string[] = labels[1];
		let barData: any = [];
		subBarLabels.forEach((sublabel: string) => {
			let subBarData: number[] = [];
			chartNode.children.forEach((node: ChartNode) => { // first dimension
				let N: ChartNode = node.children.find((N: ChartNode) => N.name === sublabel);
				subBarData.push(N ? N.value : 0);
			})
			barData.push({
				name: sublabel,
				data: subBarData
			});
		})

		return ChartsUtil.convertToBarOption(type, title, barData, xAxisLabels, subBarLabels);
	}
	public static convertToSimpleBarChartOption(reduceSeq: Array<Property>, chartNode: ChartNode, type: string): void {
		let xAxisLabels: string[] = chartNode.children.map((e: ChartNode) => e.name);
		let data: any[] = chartNode.children.map((e: ChartNode) => e.value);
		let title: string;
		let barData: any;
		if (reduceSeq && reduceSeq.length > 0) {
			title = reduceSeq[0].name;
			barData = [{
				name: reduceSeq[0].name,
				data: data
			}];
		} else {
			title = chartNode.name;
			barData = [{
				name: chartNode.name,
				data: [chartNode.value]
			}]
		}
		return ChartsUtil.convertToBarOption(type, title, barData, xAxisLabels);
	}

    private static convertToBarOption(_type: string, _title: string, _series: {name: string, data: number[]}[], _xAxisLabel: string[], _subBarlabels?: string[]): any {
		return  {
			title : {
				text: _title
			},
			tooltip : barTooltip,
			legend: {
				data: _subBarlabels == null ? [] : _subBarlabels
			},
			toolbox: barToolBox,
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : _xAxisLabel
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series: _series.map((s: {name: string, data: number[]}) => {
				return {
					name: s.name,
					type: _type,
					data: s.data,
					markPoint : barMarkPoint,
					markLine : barMarkLine
				}
			})
		};
	}
	public static convertChartNodeToTreeNode(data: ChartNode): any {
		let result: any = {};
		result.name = data.name;
		result.uid = data.id;
		if (data.children && data.children.length > 0) {
			result.children = [];
			data.children.forEach((e: ChartNode) => {
				result.children.push(ChartsUtil.convertChartNodeToTreeNode(e));
			});
		} else {
			result.value = data.value;
		}
		return result;
	}

    // pie
    public static convertChartNodeToPieNode(node: ChartNode, reduceSeqData: Array<Property>): any {
        let legendData: Array<any> = [];
		let seriesData: Array<any> = [];
		node.children.forEach((e: any) => {
			legendData.push(e.name);
			seriesData.push({value: e.value, name: e.name});
		});

		let option: any = {
			title : {
				text: reduceSeqData[0].name,
				subtext: '',
				x:'center'
			},
            tooltip : {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: legendData
            },
            series : [
                {
                    name: reduceSeqData[0].name,
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        
        return option;
    }

    // nested pie
    public static convertChartNodeToNestedPieNode(node: ChartNode, reduceSeqData: Array<Property>): any {
        let legendData: Array<any> = [];
        let series1Data: Array<any> = [];
        let series2Data: Array<any> = [];

		node.children.forEach((e: any) => {
            legendData.push(e.name);

            e.children.forEach((c: any) => {
                legendData.push(c.name);
                series2Data.push({value: c.value, name: c.name});
            });

            series1Data.push({value: e.value, name: e.name});
        });

		let option: any = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: legendData
            },
            series: [
                {
                    name: reduceSeqData[0].name,
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '40%'],
        
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: series1Data
                },
                {
                    name: reduceSeqData[1].name,
                    type:'pie',
                    radius: ['50%', '70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: series2Data
                }
            ]
        };
        
        return option;
    }
    
}
