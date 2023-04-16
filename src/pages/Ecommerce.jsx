import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Button } from '../components'
import { earningData } from '../data/dummy'

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center lg:flex-wrap">
        <div className="m-3 h-44 w-full rounded-xl bg-white bg-hero-pattern bg-center bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">88,433.90$</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              bgColor="blue"
              color="white"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="m-3 flex flex-wrap items-center justify-center gap-1">
          {earningData.map((item) => (
            <div
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
                <span className={`text-sm text-${item.pcColor} ml-2`}></span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
