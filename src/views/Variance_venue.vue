<template>
    <div
      id="VarianceVenue"
      style="width: 600px; height: 600px;margin-left:220px"
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
      var chartDom = document.getElementById("VarianceVenue");
      var myChart = echarts.init(chartDom);
      echarts.registerTransform(ecStat.transform.regression);
      var option;
      $.get("http://127.0.0.1:8081//data_2/venue_variance.json", function (data) {
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
            text: "venue嵌入主元标准差",
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
