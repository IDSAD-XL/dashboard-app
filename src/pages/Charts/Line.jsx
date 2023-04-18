import React from 'react'

import { Header, LineChart } from '../../components'

const Line = () => (
  <div className="m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10">
    <Header category="Line" title="Inflation Rate" haveDarkMode={true} />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
)

export default Line
