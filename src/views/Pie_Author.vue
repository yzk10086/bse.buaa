<template>
  <div id="PieAuthor" style="width: 800px; height: 600px"></div>
</template>


<script>
import $ from "jquery";
import * as echarts from "echarts";
export default {
  name: "Echarts",
  methods: {
    mlPCA() {
      var chartDom = document.getElementById("PieAuthor");
      var myChart = echarts.init(chartDom);
      var option;
      $.get("http://127.0.0.1:8081//SQL/1.csv", function (data) {
        //$.get("http://127.0.0.1:8081//data_2/venue_tsnesmall_result_dump.json", function (data) {
        console.log(data);
        console.log(data.split("\r\n"));
        const _set = new Set();
        const new_data = data
          .split("\r\n")
          .map((e) => {
            const tmp = e.split(",");
            return new Object({
              name: tmp[0] + " " + tmp[1],
              people: tmp[0],
              value: tmp[2],
            });
          })
          .splice(1);
        console.log(new_data);
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
        console.log(_set);

        option = {
          title: {
            text: "十年top10作者被引用数统计",
            subtext: "科技大数据平台数据集",
            left: "center",
          },
          tooltip: {
            trigger: "item",
            formatter: "{b} : {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "right",
          },

          series: [
            {
              // name: "访问来源",
              type: "pie",
              radius: "50%",
              data: _new2,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
              labelLine: {
                show: false,
              },
              label: {
                show: true,
                position: "outside",
                formatter: "{c} \n({d}%)",
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
