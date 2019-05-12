import React, { useState } from 'react'
import logo from './images/qantas-logo.png'
import styles from './App.module.scss'

import { Summary } from './components/Summary'
import { Hotel } from './components/Hotel'

import { extractHotelInformation, sortHotels } from './Utils/HotelInfo'

import data from './data/data.json'

const App = () => {
  const [sortMethod, setSortMethod] = useState('default')
  const results = data.results
  const sortedResults = sortHotels(results, sortMethod)

  return (
    <div className={styles.app}>
      <img src={logo} className={styles.logo} alt="logo" />
      <Summary numHotels={results.length} sortMethod={sortMethod} setSortMethod={setSortMethod} />
      {sortedResults.map(hotel => {
        const hotelData = extractHotelInformation(hotel)
        return <Hotel key={hotel.id} data={hotelData} />
      })}
    </div>
  )
}

export default App
