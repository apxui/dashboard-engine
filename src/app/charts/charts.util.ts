import { ChartNode } from "../chart-tree/entity";
import { barTooltip, barToolBox, barMarkPoint, barMarkLine } from "./bar.option";

export class ChartsUtil {
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
	
					expandAndCollapse: true,
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

    public static convertToBarOption(_title: string, _series: {name: string, data: number[]}[], _xAxisLabel: string[]): any {
		return  {
			title : {
				text: _title
			},
			tooltip : barTooltip,
			legend: {
				data:_series.map((s: any) => s.name)
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
					type: 'bar',
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

    // nested pie
    public static convertChartNodeToPieNode(data: ChartNode): any {
        return {
            title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
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
    }
    
}
