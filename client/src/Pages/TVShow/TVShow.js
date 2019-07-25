import React from 'react'
import TVShowHeader from '../../components/TVShowHeader'
import TVCastSlider from '../../components/TVCastSlider'
import TVShowComments from '../../components/TVShowComments'

const TVShow = _ => {
  return (
    <div>
      <TVShowHeader />
      <TVCastSlider />
      {/* <TVShowComments /> */}
    </div>
  )
}

export default TVShow
