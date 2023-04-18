import React from 'react'
import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts'
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../data/dummy'
import { useSelector } from 'react-redux'

const Stacked = ({ width, height }) => {
  const currentMode = useSelector((state) => state.app.mode)
  const currentAccent = useSelector((state) => state.app.accent)
  const palette = [currentAccent, '#393b40', '#6FAAB0', '#C4C24A']
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      palettes={palette}
      background={currentMode === 'dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
