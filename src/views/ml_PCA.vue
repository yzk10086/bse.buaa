<template>
  <div class="mlPCA">
    <div id="main" style="width: 800px; height: 800px;position:absolute;left:450px;"></div>
  </div>
</template>


<script>
import $ from 'jquery';
export default {
  name: 'Echarts',
  methods:{
	mlPCA(){
        var echarts = require('echarts');
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;
        $.get('http://127.0.0.1:8081/PCA/iris_PCA.json', function (data) {

            // console.log(data.num)

            const d1=[],d2=[],d3=[];
                data.num.forEach(e=>{
                    if(e[2]===0.0)
                    d1.push(new Array(e[0],e[1]))
                    else if(e[2]===1.0)
                    d2.push(new Array(e[0],e[1]))
                    else
                    d3.push(new Array(e[0],e[1]))
                })
            // console.log(d1)
            option = {

                title: {
                    text: 'PCA_dimension',
                    subtext: 'Data from: iris.csv'
                },
                grid: {
                    left: '3%',
                    right: '7%',
                    bottom: '7%',
                    containLabel: true
                },

                tooltip: {
                    // trigger: 'axis',
                    showDelay: 0,
                    formatter: function (params) {
                        if (params.value.length > 1) {
                            return params.seriesName + ' :<br/>'
                            + params.value[0]// + 'cm '
                            + params.value[1];// + 'kg ';
                        }
                        else {
                            return params.seriesName + ' :<br/>'
                            + params.name + ' : '
                            + params.value ;//+ 'kg ';
                        }
                    },
                    axisPointer: {
                        show: true,
                        type: 'cross',
                        lineStyle: {
                            type: 'dashed',
                            width: 1
                        }
                    }
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                brush: {
                },
                legend: {
                    data: ['Iris-setosa', 'Iris-versicolor','Iris-virginica'],
                    left: 'center',
                    bottom: 10
                },
                xAxis: [
                    {
                        type: 'value',
                        scale: true,
                        axisLabel: {
                            //formatter: '{value} cm'
                            formatter: '{value}'
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        axisLabel: {
                            //formatter: '{value} kg'
                            formatter: '{value}'
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: 'Iris-setosa',
                        type: 'scatter',
                        emphasis: {
                            focus: 'series'
                        },
                        data:d1,
                        markArea: {
                            silent: true,
                            itemStyle: {
                                color: 'transparent',
                                borderWidth: 1,
                                borderType: 'dashed'
                            },
                            data: [[{
                                name: 'Iris-setosa Data Range',
                                xAxis: 'min',
                                yAxis: 'min'
                            }, {
                                xAxis: 'max',
                                yAxis: 'max'
                            }]]
                        },
                        markPoint: {
                            data: [
                                {type: 'max', name: 'Max'},
                                {type: 'min', name: 'Min'}
                            ]
                        },
                        markLine: {
                            lineStyle: {
                                type: 'solid'
                            },
                            data: [
                                {type: 'average', name: '平均值'},
                                { xAxis: 160 }
                            ]
                        }
                    },
                            {
                        name: 'Iris-versicolor',
                        type: 'scatter',
                        emphasis: {
                            focus: 'series'
                        },
                        data:d2,
                        markArea: {
                            silent: true,
                            itemStyle: {
                                color: 'transparent',
                                borderWidth: 1,
                                borderType: 'dashed'
                            },
                            data: [[{
                                name: 'Iris-versicolor Data Range',
                                xAxis: 'min',
                                yAxis: 'min'
                            }, {
                                xAxis: 'max',
                                yAxis: 'max'
                            }]]
                        },
                        markPoint: {
                            data: [
                                {type: 'max', name: 'Max'},
                                {type: 'min', name: 'Min'}
                            ]
                        },
                        markLine: {
                            lineStyle: {
                                type: 'solid'
                            },
                            data: [
                                {type: 'average', name: '平均值'},
                                { xAxis: 160 }
                            ]
                        }
                    },
                    {
                        name: 'Iris-virginica',
                        type: 'scatter',
                        emphasis: {
                            focus: 'series'
                        },
                        data:d3,
                        markArea: {
                            silent: true,
                            itemStyle: {
                                color: 'transparent',
                                borderWidth: 1,
                                borderType: 'dashed'
                            },
                            data: [[{
                                name: 'Iris-virginica Data Range',
                                xAxis: 'min',
                                yAxis: 'min'
                            }, {
                                xAxis: 'max',
                                yAxis: 'max'
                            }]]
                        },
                        markPoint: {
                            data: [
                                {type: 'max', name: 'Max'},
                                {type: 'min', name: 'Min'}
                            ]
                        },
                        markLine: {
                            lineStyle: {
                                type: 'solid'
                            },
                            data: [
                                {type: 'average', name: 'Average'},
                                //{ xAxis: 170 }
                            ]
                        }
                    }
                ]
            };
            myChart.setOption(option);

        });//read
        option && myChart.setOption(option);

    }//mlPCA
  },//methods
  mounted() {
    this.mlPCA();
  }
}//default

</script>

<style>

</style>
