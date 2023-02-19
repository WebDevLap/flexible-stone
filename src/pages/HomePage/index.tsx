import React from 'react'
import { Header } from '../../components/Header'
import { Main } from './components/Main'
import { Using } from './components/Using'
import { TechDescription } from './components/TechDescription'

export const HomePage: React.FC = () => {
  return (
    <main className="">
      <Main/>
      <Using/>
      <TechDescription/>
    </main>
  )
}
