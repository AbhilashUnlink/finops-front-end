'use client'
import { Button, Divider } from 'antd'
import React from 'react'

const PipelinesHeader = () => {
    return (
        <div>
            <span className='font-2xl font-bold'>
                PIPELINES
            </span>
            <Divider />
            <div className='flex flex-row justify-between'>
                <div className="left-section">
                    <Button type='default'>Create Pipeline</Button>
                </div>
                <div className="right-section flex flex-row gap-2">
                    <input placeholder='Search' />
                    <input placeholder='Sort By Date' />
                </div>
            </div>
        </div>
    )
}

export default PipelinesHeader