import React from 'react'

import { pieChartData } from '../../data/dummy'
import { Header, PieChart } from '../../components'

const Pie = () => (
  <div className="m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10">
    <Header category="Pie" title="Project Cost Breakdown" haveDarkMode={true} />
    <div className="w-full">
      <PieChart
        id="chart-pie"
        data={pieChartData}
        legendVisiblity
        height="full"
      />
    </div>
  </div>
)

export default Pie
