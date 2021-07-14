<template>
  <div>
    <div
      id="BarSchool"
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
      var chartDom = document.getElementById("BarSchool");
      var myChart = echarts.init(chartDom);
      var option;
      $.get("http://127.0.0.1:8081//SQL/2_unicode.csv", function (data) {
        //$.get("http://127.0.0.1:8081//data_2/venue_tsnesmall_result_dump.json", function (data) {
        console.log(data);
        // console.log(data.split("\r\n"));
        const _set = new Set();
        const new_data = data
          .split("\r\n")
          .map((e) => {
            const tmp = e.split(",");
            return new Object({
              name: tmp[1],
              //field: tmp[1],
              value: tmp[2],
            });
          })
          .splice(1);
        //console.log(new_data);
        const _new2 = [];
        var cnt = 10,
          i = 0;
        while (cnt && i < new_data.length) {
          if (!_set.has(new_data[i].name)) {
            _new2.push(new_data[i]);
            _set.add(new_data[i].name);
            cnt--;
          }
          i++;
        }
        //console.log(_new2);

        option = {
          dataset: {
            source: _new2,
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
