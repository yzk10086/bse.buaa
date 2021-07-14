<template>
    <div
      id="TransE20"
      style="width: 500px; height: 500px; margin-left:300px"
    ></div>
</template>


<script>
import $ from "jquery";
import * as echarts from 'echarts';
import ecStat from 'echarts-stat';

export default {
  name: "Echarts",
  methods: {
    mlPCA() {
      var chartDom = document.getElementById("TransE20");
      var myChart = echarts.init(chartDom);
      echarts.registerTransform(ecStat.transform.regression);
      var option;
      $.get("http://127.0.0.1:8081//data_2/variance_20.json", function (data) {
        //console.log(data)
        const new_data = data.map((val, index) => new Array(index, val*val));
        option = {
          dataset: [
            {
              source: new_data
            },
            {
              transform: {
                type: "ecStat:regression",
                config: {
                  method: "exponential",
                  // 'end' by default
                  // formulaOn: 'start'
                },
              },
            },
          ],
          title: {
            // 标题
            text: "TransE训练下的主元标准差分布（训练次数：20）",
            // 副标题
            //subtext: "By 17373550_yzk",
            // 副标题链接
            left:"center"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
            },
          },
          xAxis: {
            splitLine: {
              lineStyle: {
                type: "dashed",
              },
            },
          },
          yAxis: {
            axisLabel:{
                inside:true
              },
            splitLine: {
              lineStyle: {
                type: "dashed",
              },
            },
          },
          series: [
            {
              name: "scatter",
              type: "scatter",
              datasetIndex: 0,
            },
            {
              name: "line",
              type: "line",
              smooth: true,
              datasetIndex: 1,
              symbolSize: 0.1,
              symbol: "circle",
              label: { show: true, fontSize: 16 },
              labelLayout: { dx: -20 },
              encode: { label: 2, tooltip: 1 },
            },
          ],
        };
        myChart.setOption(option);
      }); //read
      option && myChart.setOption(option);
    }, //mlPCA
  }, //methods
  mounted() {
    this.mlPCA();
  },
}; //default
</script>

<style>
</style>
