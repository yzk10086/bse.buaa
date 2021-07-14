<template>
  <div>
    <div
      id="BarPaper"
      style="width: 1000px; height: 1000px;margin-left:60px;"
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
      var chartDom = document.getElementById("BarPaper");
      var myChart = echarts.init(chartDom);
      var option;
      $.get("http://127.0.0.1:8081//SQL/3.csv", function (data) {
        //$.get("http://127.0.0.1:8081//data_2/venue_tsnesmall_result_dump.json", function (data) {
        
        //console.log(data.split("\r\n"));
        const new_data = data
          .split("\r\n")
          .map((e) => {
            const tmp = e.split("\"");
            return new Object({
              name: tmp[1],
              //comma: tmp[2],
              value: tmp[3],
            });
          }).splice(-12);
        console.log(new_data)
        console.log(new_data.splice(11))
        option = {
          title: {
            text: "数据集中2007-2017年论文数量统计",
            subtext: "科技大数据平台数据集",
            left: "center",
          },
          dataset: {
            source: new_data.reverse(),
          },
          tooltip: {},
          //yAxis: [{ type: "category", gridIndex: 0 }],
          yAxis: [{ 
            type: "category", 
            gridIndex: 0 ,
            axisLabel:{
              align:'right',
              width:80,
              overflow:'break',
            }
          }],
          xAxis: [{ gridIndex: 0 }],
          grid: [{ bottom: "55%" }, { top: "55%" }],
          series: [
            // These series are in the first grid.
            {
              //data: _new2[0],
              type: "bar",
              seriesLayoutBy: "row",
              label: {
                show: true,
                position: "inside",
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
