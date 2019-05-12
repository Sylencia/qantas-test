import React from 'react'
import logo from './images/qantas-logo.png'
import styles from './App.module.scss'

import { Summary } from './components/Summary'
import { Hotel } from './components/Hotel'

import { extractHotelInformation } from './Utils/HotelInfo'

import data from './data/data.json'

const App = () => {
  const results = data.results

  return (
    <div className={styles.app}>
      <img src={logo} className={styles.logo} alt="logo" />
      <Summary numHotels={results.length} />
      {data.results.map(hotel => {
        const hotelData = extractHotelInformation(hotel)
        return <Hotel key={hotel.id} data={hotelData} />
      })}
    </div>
  )
}

export default App
