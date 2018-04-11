import { ChartNode, Property } from "../chart-tree/entity";
import { barTooltip, barToolBox, barMarkPoint, barMarkLine } from "./bar.option";

export class ChartsUtil {
    // 2 values
    public static convertToScatterOption(chartNode: ChartNode, pivotValues: Array<string>): any {

        let data: number[][] = [];
        chartNode.data.forEach((e: any) => {
            let a: Array<any> = [];
            pivotValues.forEach((p: string) => {
                a.push(e[p]);
            });

            data.push(a);
		});

        return {
            xAxis: {},
            yAxis: {},
            series: [{
                symbolSize: 20,
                data: data,
                type: 'scatter'
            }]
        };
    }
    // 3d line (v,v,t)
    public static convertTo3DLineOption(chartNode: ChartNode, pivotValues: Array<string>): any {

        let data: number[][] = [];
        chartNode.data.forEach((e: any) => {
            let a: Array<any> = [];
            pivotValues.forEach((p: string) => {
                a.push(e[p]);
            });

            data.push(a);
        });
        
        return {
			tooltip : barTooltip,
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
			toolbox: barToolBox,
            
            legend: {
                orient: 'vertical',
                left: 'right',
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
                data: data,
                lineStyle: {
                    width: 4
                }
            }]
        }
    }
    // 3d bar (v,v,v)
    public static convertTo3DBarOption(chartNode: ChartNode, pivotValues: Array<string>): any {
        let data: number[][] = [];
        chartNode.data.forEach((e: any) => {
            let a: Array<any> = [];
            pivotValues.forEach((p: string) => {
                a.push(e[p]);
            });

            data.push(a);
        });
        console.log(chartNode);
        
        console.log(data);
        

        return {
			tooltip : barTooltip,
            
            visualMap: {
                max: 20,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
			toolbox: barToolBox,
            
            xAxis3D: {
                type: 'value'
                // data: hours,
                // name: 'abc'
            },
            legend: {
                orient: 'vertical',
                left: 'right',
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
                data: data.map(function (item) {
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


	public static convertToMultiBarChartOption(reduceSeq: Array<Property>, chartNode: ChartNode, dimLabels: any, type: string): any {
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
			});
			barData.push({
				name: sublabel,
				data: subBarData
			});
		});

		return ChartsUtil.convertToBarOption(type, title, barData, xAxisLabels, subBarLabels);
    }
    public static convertToMultiValueBarChartOption(reduceSeq: Array<Property>, chartNode: ChartNode, pivotValues: string[]): any {
        console.log(chartNode);
        
		let title: string = "";
        let xAxisLabels: string[] = chartNode.children.map((e: ChartNode) => e.name); // x axis label, should be the first dimension
		let subBarLabels: string[] = pivotValues; //eq,sq,bq
		let barData: any = [];
		subBarLabels.forEach((sublabel: string) => {
			let subBarData: number[] = [];
			chartNode.children.forEach((node: ChartNode) => { // first dimension
				subBarData.push(node[sublabel]);
			});
			barData.push({
				name: sublabel,
				data: subBarData
			});
		});

		return ChartsUtil.convertToBarOption('bar', title, barData, xAxisLabels, subBarLabels);
    }
	public static convertToSimpleBarChartOption(reduceSeq: Array<Property>, chartNode: ChartNode, type: string): any {
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
			}];
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
                orient: 'vertical',
                left: 'right',
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
				};
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
			toolbox: barToolBox,
            
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
			toolbox: barToolBox,
            
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

    // radar chart
    public static convertChartNodeToRadarChartNode(node: ChartNode, pivots: Array<string>): any {
        let legendData: Array<any> = [];
        let seriesData: Array<any> = [];
        let indicator: Array<any> = [];
        let maxData: Array<number> = [];
        let maxValue: number = 0;

		node.data.forEach((e: any) => {
            legendData.push(e.name);
            
            let d: Array<any> = [];
            pivots.forEach((c: any) => {
                d.push(Number(e[c]));
            });

			seriesData.push({value: d, name: e.name});
        });

        
        pivots.forEach((c: any) => {
            indicator.push({name: c.name, max: 120});
        });

        
        let option: any = {
            title: {
                text: 'Radar Chart'
            },
            tooltip: {},
            legend: {
                data: legendData,
                orient: 'vertical',
                left: 'right',
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                   }
                },
                indicator: indicator
            },
            series: [{
                name: 'Budget vs spending',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: seriesData
            }]
        };

        console.log(option);

        return option;
    }
    
}