import React from 'react'
import { Intro } from '../components/intro/Intro'
import PageHeader from '../components/pageHeader/PageHeader'

export default function Home() {
  return (
    <div className='home'>
      {/* <PageHeader/> */}
        <Intro/>
    </div>
  )
}
