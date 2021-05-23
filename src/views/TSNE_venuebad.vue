<template>
  <div class="mlPCA">
    <div
      id="main"
      style="width: 800px; height: 800px; position: absolute; left: 450px"
    ></div>
  </div>
</template>


<script>
import $ from "jquery";
import * as echarts from "echarts";
export default {
  name: "Echarts",
  methods: {
    mlPCA() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
      //$.get("http://127.0.0.1:8081//data_2/venue_pac2d_result_dump.json", function (data) {
      $.get("http://127.0.0.1:8081//data_2/venue_tsnesmall_result_dump_bad.json", function (data) {
        console.log(data);
        var new_data = data.map((e) => new Array(e.x, e.y, e.name));
        // var conferece_name = data.map((e) => e.name);
        option = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              name: "1990",
              data: new_data,
              type: "scatter",
              // symbolSize: function (data) {
              //     return Math.sqrt(data[2]) / 5e2;
              // },
              symbolSize: 10,
              emphasis: {
                focus: "self",
              },
              labelLayout: {
                hideOverlap: false,
              },
              labelLine: {
                show: true,
                length2: 5,
                lineStyle: {
                  color: "#bbb",
                },
              },
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[2];
                },
                position: "right",
                minMargin: 2,
              },
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
