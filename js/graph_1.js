// 全国客户分布
var myChart = echarts.init(document.getElementById('graph_1'));

        // 指定图表的配置项和数据
        // var option = {
        //     title: {
        //         text: '全国客户分布',
        //         left: 'left',
        //         top: 'top',
        //         textStyle: {
        //             color: '#fff',
        //             fontWeight:'300',
        //         }
        //     },
        // };
        option = {
    backgroundColor: 'rgba(0, 0, 0, 0)',

    title: {
                text: '全国客户分布',
                left: 'left',
                top: 'top',
                textStyle: {
                    color: '#fff',
                    fontWeight:'300',
                }
            },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '80%',
            center: ['50%', '50%'],
            data:[
                {value:450, name:'华北地区'},
                {value:245, name:'华东地区'},
                {value:360, name:'华南地区'},
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#2083e2',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);