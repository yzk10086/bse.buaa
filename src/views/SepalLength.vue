<template>
  <div id="test">
    <div id="main" style="width: 600px;height:600px;"></div>
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

var data = [{
  type: 'violin',
  x: unpack(rows, 'Name'),
  y: unpack(rows, 'SepalLength'),
  points: 'all',
  pointpos: 0,
  box: {
    visible: true
  },
  line: {
    color: 'green',
  },
  meanline: {
    visible: true
  },
  transforms: [{
        type: 'groupby',
        groups: unpack(rows, 'Name'),
        styles: [
        {target: 'Iris-setosa', value: {line: {color: 'blue'}}},
        {target: 'Iris-versicolor', value: {line: {color: 'orange'}}},
        {target: 'Iris-virginica', value: {line: {color: 'green'}}}
        ]
	}]
}]

var layout = {
  title: "SepalLength",
  yaxis: {
    zeroline: false
  }
}

Plotly.newPlot('test', data, layout);
});

    }
  },
      mounted() {
      this.Violin();
        },
      }//default
</script>

<style>

</style>
