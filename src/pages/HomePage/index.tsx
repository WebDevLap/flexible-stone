import React from 'react'
import { Main } from './components/Main'
import { Using } from './components/Using'
import { TechDescription } from './components/TechDescription'
import { Adventages } from './components/Adventages'
import { StagesWork } from './components/StagesWork'

export const HomePage: React.FC = () => {
  return (
    <main className="">
      <Main/>
      <Using/>
      <TechDescription/>
      <Adventages/>
      <StagesWork/>
    </main>
  )
}
