<template>
    <div id="PcaAuthorThree" style="width: 500px; height: 500px;margin-left:300px"></div>
</template>


<script>
import $ from "jquery";
import "echarts-gl";
export default {
  name: "Echarts",
  methods: {
    PCA3D() {
      var echarts = require("echarts");
      var chartDom = document.getElementById("PcaAuthorThree");
      var myChart = echarts.init(chartDom);
      var option;
      var symbolSize = 8;
        var opacity=1;
      $.get("http://127.0.0.1:8081//data_2/new_data_author_pac_result_dump.json", function (data) {
        //$.get( "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/life-expectancy-table.json",function (data) {
        const d1 = [];        
        console.log(data)

        data.forEach((e) => {
          console.log('e', e);
          // const name = e.name; 
          d1.push(new Array(e.d0, e.d1, e.d2, e.name));
          // else if (e[3] === 1.0) d2.push(new Array(e[0], e[1], e[2]));
          // else d3.push(new Array(e[0], e[1], e[2]));
        });
        console.log('d1', d1)
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
          title: {
            // 标题
            text: "PCA可视化生成的作者节点聚类云",
            // 副标题
            //subtext: "By 17373550_yzk",
            // 副标题链接
            left:"center"
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
              labelLayout: {
                hideOverlap: true,
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
                  return param.data[3];
                },
                position: "right",
                minMargin: 2,
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
