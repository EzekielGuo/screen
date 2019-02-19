// 故障统计月报
var myChart = echarts.init(document.getElementById('graph_6'));
var xAxisData = ['02', '03', '04', '05', '06', '07', '08', '09', '10','11','12','01',];
var legendData= ['故障',
                // '解决量',
                // '投诉解决率'
                ];
var title = "故障统计月报";
var serieData = [];
var metaDate = [
    [12, 14, 10, 12, 20, 13, 13, 17,14, 12, 15, 13],
    // [200, 120, 300, 200, 170, 300, 200, 180,200, 190, 300, 200],
    // [100,200, 140, 300, 200, 180, 100, 300, 230, 130, 100 ,300],
]
for(var v=0; v < legendData.length ; v++){
    var serie = {
        name:legendData[v],
        type: 'line',
        symbol:"circle",
        symbolSize:10,
        data: metaDate[v]
    };
    serieData.push(serie)
}
var colors = ["#036BC8","#4A95FF","#5EBEFC","#2EF7F3","#FFFFFF"];
var option = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    title : {text: title,
        textAlign:'left',
        textStyle:{
            color: '#fff',
            fontWeight:'300',}
    },
    legend: {
        show:true,left:"right",data:legendData,y:"5%",
        itemWidth:18,itemHeight:12,textStyle:{
            color: '#fff',
            fontWeight:'300',},
    },
    color:colors,
    grid: {left: '2%',top:"20%",bottom: "5%",right:"5%",containLabel: true},
    tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
    xAxis: [
        {   
            type: 'category',
            axisLine: { show: true,lineStyle:{ color:'#6173A3' }},
            axisLabel:{interval:0,textStyle:{color:'#9ea7c4',fontSize:14},rotate:45, },
            axisTick : {show: false},
            data:xAxisData,
        },
    ],
    yAxis: [
        {   
            axisTick : {show: false},
            splitLine: {show:false},
            axisLabel:{textStyle:{color:'#9ea7c4',fontSize:14} },
            axisLine: { show: true,lineStyle:{ color:'#6173A3'}},
        },
    ],
    series:serieData
};


myChart.setOption(option);
