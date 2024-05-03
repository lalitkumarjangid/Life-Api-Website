import React from 'react'
import "./style.css"

const FinancialCard = ({ title, subtitle, text, svg }) => {
  return (
    <>
      <div className='financialCard'>
        <div className='financialCard_top py-12 text-center'>
          <i>
            { svg }
          </i>
        </div>
        <div className='financialCard_bottom'>
          <div className='w-full grid grid-cols-3 gap-4'>
            <div className='flex flex-col justify-between col-span-2'>
              <h2 className='card_title'>
                { title }
              </h2>
              <h3 className='card_subtitle'>
                { subtitle }
              </h3>
            </div>
            <div className='col-span-1'>
              <h4 className='card_method text-right'>Personal Use</h4>
            </div>
          </div>
          <div className='w-full'>
            <p className='mt-5 card_method'>
              { text }
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinancialCard