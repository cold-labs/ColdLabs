import React from 'react'

interface Props {
    title: string;
    description?: string;
  }

export const UnderDevelopment = ({ title, description } : Props) => {
    return (
        <div className='min-h-[calc(100vh-7.1rem)]'>
          <div className='max-w-7xl mx-auto py-16 space-y-16'>
            <div className='mx-6 space-y-4'>
              <p className='text-3xl font-semibold'>{title}</p>
              <p className='text-lg font-semibold text-justify'>{description}</p>
            </div>
            <div className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-bold text-primary/10 select-none px-6">
                Under Development
              </div>
          </div>
        </div>
      )
}
