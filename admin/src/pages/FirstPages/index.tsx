import React, { Component } from 'react';
import SimpleLineChart from './simpleLineChart';
import AreaChartFillByValue from './areaChartFillByValue';
import BrushBarChart from './brushBarChart';
import ScatterAndLineOfBestFit from './lineOfBestFit';
import MultipleYAxesScatterChart from './scatterChart';
import CustomActiveShapePieChart from './CustomActiveShapePieChart';
import SpecifiedDomainRadarChart from './specifiedDomainRadarChart';
import { login } from '@/service/api';
import './index.scss'

class FirstPages extends Component {
  constructor(props: any) {
    super(props)
  }
  componentDidMount() {
    console.log(process.env.REACT_APP_BASE_URL)
    login({ username: 'string', password: 'string' })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="chart-container">
        <div className="chart-img">
          <p className="chart-title">线图</p>
          <SimpleLineChart />
        </div>

        <div className="chart-img">
          <p className="chart-title">面积图</p>
          <AreaChartFillByValue />

        </div>
        <div className="chart-img">
          <p className="chart-title">雷达图</p>
          <SpecifiedDomainRadarChart />

        </div>
        <div className="chart-img">
          <p className="chart-title">饼图</p>
          <CustomActiveShapePieChart />

        </div>
        <div className="chart-img">
          <p className="chart-title">散点图</p>
          <MultipleYAxesScatterChart />

        </div>
        <div className="chart-img">
          <p className="chart-title">散点图</p>
          <ScatterAndLineOfBestFit />

        </div>
        <div className="chart-img">
          <p className="chart-title">可缩放柱状图</p>
          <BrushBarChart />

        </div>
      </div>
    )
  }
}

export default FirstPages