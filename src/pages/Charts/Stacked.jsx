import React from 'react'

import { Header, Stacked as StackedChart } from '../../components'

const Stacked = () => (
  <div className="m-4 mt-20 rounded-3xl  bg-white p-10 dark:bg-secondary-dark-bg md:m-10 md:mt-0">
    <Header category="Stacked" title="Revenue Breakdown" haveDarkMode={true} />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
)

export default Stacked
