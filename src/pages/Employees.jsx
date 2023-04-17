import React from 'react'
import { Header } from '../components'
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Toolbar,
  Inject,
  Page,
} from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy'

const Employees = () => {
  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="Page" title="Emloyees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees
