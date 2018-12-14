import React, { Component } from 'react';
//ECharts
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


export default class Bar extends Component {

  componentDidMount() {
    //init charts
    var myChart = echarts.init(document.getElementById('bar'));
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: ["1", "2", "3", "4", "5", "6"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }

  render() {
    return (
      <div id="bar" style={{ width: 800, height: 400 }}></div>
    );
  }
}
