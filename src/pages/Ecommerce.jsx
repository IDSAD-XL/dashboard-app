import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Button, LineChart, PieChart, SparkLine, Stacked } from '../components'
import {
  dropdownData,
  earningData,
  ecomPieChartData,
  medicalproBranding,
  recentTransactions,
  SparklineAreaData,
  weeklyStats,
} from '../data/dummy'
import MotionAppear from '../components/MotionAppear'
import { APP_ACCENT_CSS_VAR } from '../utils/constants'
import { useSelector } from 'react-redux'
import { IoIosMore } from 'react-icons/io'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import product9 from '../data/product9.jpg'

const DropDown = ({ currentMode }) => (
  <div className="w-28 rounded-md border-1 border-color px-2 py-1">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: currentMode === 'dark' && 'white' }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
)

const Ecommerce = () => {
  const currentMode = useSelector((state) => state.app.mode)
  const currentColor = useSelector((state) => state.app.accent)
  return (
    <div className="mt-24">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <MotionAppear className="m-3 h-44 w-full rounded-xl bg-white bg-cover bg-center bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">88,433.90$</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: APP_ACCENT_CSS_VAR }}
              className="opacity-0.9 rounded-full p-4 text-2xl text-white hover:drop-shadow-xl"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </MotionAppear>
        <div className="m-3 flex flex-wrap items-center justify-center gap-1">
          {earningData.map((item, index) => (
            <MotionAppear
              delay={0.15 * (index + 1)}
              key={item.title}
              className="rounded-2xl bg-white p-3 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="opacity-0.9 rounded-full p-4 text-2xl hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span
                  className={`text-sm ${
                    item.percentage < 0 ? 'text-red-600' : 'text-green-500'
                  } ml-2`}
                >
                  {item.percentage}%
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-400">{item.title}</p>
            </MotionAppear>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <MotionAppear
          delay={earningData.length * 0.15 + 0.1}
          className="m-3 rounded-2xl bg-white p-4 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780"
        >
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            <div className="m-4 border-r-1 border-color pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="hover:drop-shadow-xs ml-3 cursor-pointer rounded-full bg-green-400 p-1.5 text-sm text-white">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div>
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={APP_ACCENT_CSS_VAR}
                  currentMode={currentMode}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </MotionAppear>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="m-3 rounded-2xl bg-white p-4 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780  ">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            <div className=" m-4 border-r-1 border-color pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="ml-3 cursor-pointer rounded-full bg-green-400 p-1.5 text-xs text-white hover:drop-shadow-xl">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="mt-1 text-gray-500">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" m-3 rounded-2xl p-4 md:w-400"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex items-center justify-between ">
              <p className="text-2xl font-semibold text-white">Earnings</p>

              <div>
                <p className="mt-8 text-2xl font-semibold text-white">
                  $63,448.78
                </p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>

          <div className="m-3 flex items-center justify-center gap-10 rounded-2xl bg-white p-8 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-400">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <PieChart
                id="pie-chart"
                data={ecomPieChartData}
                legendVisiblity={false}
                height="160px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 flex flex-wrap justify-center gap-10">
        <div className="rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="mt-4 flex justify-between">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="rounded-lg p-4 text-2xl hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-sm text-gray-400">36 Recent Transactions</p>
          </div>
        </div>
        <div className="w-96 rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-760">
          <div className="mb-10 flex items-center justify-between gap-2">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="overflow-auto md:w-full">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="m-3 rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-400">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div
                key={item.title}
                className="mt-4 flex w-full justify-between"
              >
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="rounded-full p-3 text-2xl text-white hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="area-sparkLine"
                height="160px"
                type="Area"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>
        </div>
        <div className="m-3 w-400 rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              <IoIosMore />
            </button>
          </div>
          <p className="mt-10 w-24 cursor-pointer rounded-lg bg-orange-400 px-2 py-0.5 text-xs font-semibold text-gray-200 hover:drop-shadow-xl">
            16 APR, 2021
          </p>

          <div className="mt-6 flex gap-4 border-b-1 border-color">
            {medicalproBranding.data.map((item) => (
              <div
                key={item.title}
                className="border-r-1 border-color pb-2 pr-4"
              >
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 border-b-1 border-color pb-4">
            <p className="text-md mb-2 font-semibold">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer rounded-lg px-3 py-0.5 text-xs text-white hover:drop-shadow-xl"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md mb-2 font-semibold">Leaders</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img
                  key={index}
                  className="h-8 w-8 rounded-full"
                  src={item.image}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-sm text-gray-400">36 Recent Transactions</p>
          </div>
        </div>
        <div className="m-3 w-400 rounded-2xl bg-white p-6 dark:bg-secondary-dark-bg dark:text-gray-200">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img className="h-50 md:w-96 " src={product9} alt="" />
            <div className="mt-8">
              <p className="text-lg font-semibold">
                React 18 finally released!
              </p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
