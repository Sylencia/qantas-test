import React from 'react'
import logo from './images/qantas-logo.png'
import styles from './App.module.scss'

import { Summary } from './components/Summary'
import { Hotel } from './components/Hotel'

const App = () => {
  return (
    <div className={styles.app}>
      <img src={logo} className={styles.logo} alt="logo" />
      <Summary />
      <Hotel />
    </div>
  )
}

export default App
