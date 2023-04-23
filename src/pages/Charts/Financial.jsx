import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from '@syncfusion/ej2-react-charts'

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from '../../data/dummy'
import { Header } from '../../components'
import { useSelector } from 'react-redux'

const date1 = new Date('2017, 1, 1')

// eslint-disable-next-line consistent-return
const filterValue = (value) => {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low
  }
}
const returnValue = financialChartData.filter(filterValue)

const Financial = () => {
  const currentMode = useSelector((state) => state.app.mode)
  const currentAccent = useSelector((state) => state.app.accent)
  const palette = [currentAccent]

  return (
    <div className="m-4 mt-20 rounded-3xl  bg-white p-10 dark:bg-secondary-dark-bg md:m-10 md:mt-0">
      <Header
        category="Financial"
        title="AAPLE Historical"
        haveDarkMode={true}
      />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          palettes={palette}
          crosshair={{
            enable: true,
            lineType: 'Vertical',
            line: { width: 0 },
          }}
          background={currentMode === 'dark' ? '#33373E' : '#fff'}
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Crosshair,
              Zoom,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial
