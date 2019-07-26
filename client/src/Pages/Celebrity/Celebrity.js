import React from 'react'
import CelebrityHeader from '../../components/CelebrityHeader'
import ShowsSlider from '../../components/ShowsSliders'
import CelebrityComments from '../../components/CelebrityComments'

const Celebrity = _ => {
  return (
    <div>
      <CelebrityHeader />
      <ShowsSlider />
      <CelebrityComments />
    </div>
  )
}

export default Celebrity
