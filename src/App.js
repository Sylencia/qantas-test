import React from 'react'
import logo from './images/qantas-logo.png'
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  )
}

export default App
