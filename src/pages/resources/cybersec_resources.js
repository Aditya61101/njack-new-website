import React from 'react'
import {Header, Footer} from '@/components'
import Resources from '@/components/resourcePage/resources'
import data from './resource_data/cybersecdata'

const cybersec_resources = () => {
  return (
    <>
        <Header selected={'Resources'} />
        <Resources data={data} />
        <Footer/>
    </>
  )
}

export default cybersec_resources
