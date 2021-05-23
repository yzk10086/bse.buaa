<template>
  <div class="Echarts">
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'Echarts',
  methods:{
	myEcharts(){
		var echarts = require('echarts');
require('echarts-gl');

var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

$.get(ROOT_PATH + '/data/asset/data/life-expectancy-table.json', function (data) {
    var symbolSize = 2.5;
    option = {
        grid3D: {},
        xAxis3D: {
            type: 'category'
        },
        yAxis3D: {},
        zAxis3D: {},
        dataset: {
            dimensions: [
                'Income',
                'Life Expectancy',
                'Population',
                'Country',
                {name: 'Year', type: 'ordinal'}
            ],
            source: data
        },
        series: [
            {
                type: 'scatter3D',
                symbolSize: symbolSize,
                encode: {
                    x: 'Country',
                    y: 'Life Expectancy',
                    z: 'Income',
                    tooltip: [0, 1, 2, 3, 4]
                }
            }
        ]
    };

    myChart.setOption(option);
});//read

option && myChart.setOption(option);

		}//echarts
},//method
mounted() {
this.myEcharts();
  }
}//default
</script>

<style>

</style>
