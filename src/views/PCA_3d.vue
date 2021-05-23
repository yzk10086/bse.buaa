<template>
  <div class="PCA_3d">
    <div id="main" style="width: 800px; height: 800px;position:absolute;left:450px;"></div>
  </div>
</template>


<script>
import $ from "jquery";
import "echarts-gl";
export default {
  name: "Echarts",
  methods: {
    PCA3D() {
      var echarts = require("echarts");
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
      var symbolSize = 8;
        var opacity=1;
      $.get("http://127.0.0.1:8081/PCA/iris_PCA_3d.json", function (data) {
        //$.get( "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/life-expectancy-table.json",function (data) {
        const d1 = [],
          d2 = [],
          d3 = [];
        console.log(data);
        
        data.num.forEach((e) => {
          if (e[3] === 0.0) d1.push(new Array(e[0], e[1], e[2]));
          else if (e[3] === 1.0) d2.push(new Array(e[0], e[1], e[2]));
          else d3.push(new Array(e[0], e[1], e[2]));
        });
        //var symbolSize = 2.5;
        option = {
          grid3D: {},
          xAxis3D: {
            type: "value",
          },
          yAxis3D: {},
          zAxis3D: {},
          // dataset: {
          //   source: d1,
          // },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          legend: {
            data: ["Iris-setosa", "Iris-versicolor", "Iris-virginica"],
            top: 0,
            left: "center",
            bottom: 10,
          },
          series: [
            {
              name: "Iris-setosa",
              type: "scatter3D",
              data: d1,
              opacity:opacity,
              symbolSize: symbolSize,
              emphasis: {
                itemstyle:{
                  opacity:1
                },
                label:{
                  show:true,
                  position:'top',
                  formatter:'{c}',
                  textStyle:{
                    fontSize:16,
                    color: '#000',
                    fontWeight:'bolder'
                  }
                },
              },
            },
            {
              name: "Iris-versicolor",
              type: "scatter3D",
              data: d2,
              opacity:opacity,
              symbolSize: symbolSize,
              emphasis: {
                itemstyle:{
                  opacity:1
                },
                label:{
                  show:true,
                  position:'top',
                  formatter:'{c}',
                  textStyle:{
                    fontSize:16,
                    color: '#000',
                    fontWeight:'bolder'
                  }
                },
              },

            },
            {
              name: "Iris-virginica",
              type: "scatter3D",
              data: d3,
              opacity:opacity,
              symbolSize: symbolSize,
              emphasis: {
                itemstyle:{
                  opacity:1
                },
                label:{
                  show:true,
                  position:'top',
                  formatter:'{c}',
                  textStyle:{
                    fontSize:16,
                    color: '#000',
                    fontWeight:'bolder'
                  }
                },
              },
            },
          ],
        };

        myChart.setOption(option);
      });
      option && myChart.setOption(option);
    }, //mlPCA
  }, //methods
  mounted() {
    this.PCA3D();
  },
}; //default
</script>

<style>
</style>
