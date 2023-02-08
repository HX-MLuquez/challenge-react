import React from 'react'
import './Cards.css'
import Cardi from './Cardi'

export default function Cards({characters}) {
    const left = characters.cardLeft.name ? characters.cardLeft : null
    const right = characters.cardRight.name ? characters.cardRight : null
    cardRight:
  return (
    <div className='cards'>
        <Cardi character={left}/>
        <Cardi character={right}/>
    </div>
  )
}
