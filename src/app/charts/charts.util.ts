import { ChartNode } from "../chart-tree/entity";
import { TreeData } from "./tree.component";

export class ChartsUtil {
    public static convertToTreeOption(data: ChartNode): any {
        return {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series:[
                {
                    type: 'tree',
    
                    data: [data],
    
                    left: '2%',
                    right: '2%',
                    top: '8%',
                    bottom: '20%',
    
                    symbol: 'emptyCircle',
    
                    orient: 'vertical',
    
                    expandAndCollapse: true,
    
                    label: {
                        normal: {
                            position: 'top',
                            rotate: -90,
                            verticalAlign: 'middle',
                            align: 'right',
                            fontSize: 9
                        }
                    },
    
                    leaves: {
                        label: {
                            normal: {
                                position: 'bottom',
                                rotate: -90,
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
    
                    animationDurationUpdate: 750
                }
            ]
        }
    };
    // public static convertToTreeData(originalData: ChartNode): any {
    //     let treeData: any = {};
    //     treeData.name = originalData.name;
    //     if (originalData.children && originalData.children.length > 0) {
    //         treeData.children = [];
    //         originalData.children.forEach(element => {
    //             treeData.children.push(ChartsUtil.convertToTreeData(element));
    //         });
    //     }
    //     return treeData;
    // }
}
