<template>
  <div id="test">
    <div id="main" style="width: 100px;height:100px;"></div>
  </div>
</template>

<script>

import * as d3 from 'd3'
import * as Plotly from 'plotly.js/dist/plotly'
export default {
  name: 'ViolinPlot',
  methods:{
	Violin(){
		//d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/violin_data.csv", function(err, rows){


    d3.csv("http://127.0.0.1:8081/data/iris.csv", function(err, rows){

      function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
      }

      console.log(rows);
      var data = [{
        type: 'violin',
        //x: unpack(rows, 'name'),
        y: unpack(rows, 'SepalLength'),

      //hoveron: "points+kde",

        points: "all",
        pointpos: 0,
        box: {
          visible: true,
        },
        //boxpoints: true,
        line: {
          color: 'black'
        },
        //fillcolor: '#4386E3',
        //opacity: 0.6,
        meanline: {
          visible: true,
        },
        //x0: "Wpw",
        transforms: [{
        type: 'groupby',
        groups: unpack(rows, 'name'),
        styles: [
        {target: 'Iris-setosa', value: {line: {color: 'blue'}}},
        {target: 'Iris-versicolor', value: {line: {color: 'orange'}}},
        {target: 'Iris-virginica', value: {line: {color: 'green'}}},
        ]
	}]
      }]

      var layout = {
              // hovermode: "closest",
              // width: 600,
              // yaxis: {
              //     showgrid: true
              // },
              // title: "Total bill distribution<br><i>scaled by number of bills per gender",
              // legend: {
              //     tracegroupgap: 0
              // },
              // violingap: 0,
              // violingroupgap: 0,
              // violinmode: "overlay",
              // height: 600
              title: "Multiple Traces Violin Plot",
  yaxis: {
    zeroline: false
  }
          }
      Plotly.newPlot('test', data, layout);
      });//d3
          }//violin
      },//method
      mounted() {
      this.Violin();
        },
      }//default
</script>

<style>

</style>
