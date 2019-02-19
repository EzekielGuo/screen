 // 出口运营商分布 

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('graph_5'));
    // 指定图表的配置项和数据

option =  {
    title: {
        text: '出口运营商分布',
        left: 'left',
        top: 'top',
        textStyle: {
            color: '#fff',
            fontWeight:'300',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    graphic:{
        type: 'text',
        left: 'center', // 相对父元素居中
        top: 'middle',  // 相对父元素居中
        style: {
            fill: 'white',
            text: [360000],
            fontSize: '22',
        }
    },
    series: [
        {
            name: "",
            type: "pie",
            hoverAnimation: true,
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
                formatter:'{a|{d}%}\n{b}',
                show: true,
                position: "outside",
                color:'#15a7f1',
                verticalAlign:'top',
                rich:{
                    a:{
                        color: 'white',
                        lineHeight: 22,
                        align: 'left',
                    },

                }
            },
            labelLine: {
                show: true,
                length:20,
                length2:50,
                lineStyle:{
                    color:'#15a7f1',
                }
            },
            data: [
                {
                    value: 13359,
                    name: "移动",
                    itemStyle:{
                        color:'#906eff'
                    }
                },
                { value: 23854, name: "电信",
                    itemStyle:{
                        color:'#28befe'
                    }
                },
                { value: 19395, name: "联通",
                    itemStyle:{
                        color:'#16e1e9'
                    }
                },
                { value: 6640, name: "教育网",
                    itemStyle:{
                        color:'#ffa800'
                    }
                },
                { value: 4597, name: "其他",
                    itemStyle:{
                        color:'#ff5b00'
                    }
                }
            ]
        }
    ]
};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);