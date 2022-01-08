import React from 'react'
import './Content.css'
import Gift from './Gift'
import NumberCard from './NumberCard'

function Content() {
    return (
        <div className='content'>
            <Gift/>
            <NumberCard/>
        </div>
    )
}

export default Content
