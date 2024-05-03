import React from 'react'
import { Button } from 'primereact/button'
import './style.css'

const PricingCard = ({ title, descriptions,  price, data, footer }) => {
  return (
    <div className='PricingCard'>
      <div className='flex flex-col'>
        <div className='PricingCard_Header'>
          <p className='text-xs font-bold'>Stocks</p>
          <h1 className='text-xl font-bold py-2'>Basic</h1>
          <p className='text-xs'>Great for trying out APIs</p>
        </div>
        <div className='PricingCard_Body'>
          <div>
            <h1 className='text-2xl font-bold'> Free </h1>
          </div>
          <Button label="Sign Up" className='w-full py-1 mt-4 text-sm' />
          <div className='w-full mt-2'>
            <p className='price-info-item'>
              <i className='pi pi-check text-xs'></i>
              <span className='text-xs pl-2'>5 API Calls / Minute</span>
            </p>
            <p className='price-info-item'>
              <i className='pi pi-check text-xs'></i>
              <span className='text-xs pl-2'>5 API Calls / Minute</span>
            </p>
            <p className='price-info-item'>
              <i className='pi pi-check text-xs'></i>
              <span className='text-xs pl-2'>5 API Calls / Minute</span>
            </p>
          </div>
        </div>
        <div className='PricingCard_Footer'>
          <p className='text-center pt-4 pb-2'>
            <i className='pi pi-user text-xs'></i>
            <span className='text-xs pl-2'>Individual Use</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PricingCard