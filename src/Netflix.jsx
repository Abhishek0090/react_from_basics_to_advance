import React from 'react'
import Card from './Card'
import animeData from './animeData'

const Netflix = () => {
    return (
        <>
        <Card
        key={animeData[0].id}
        imgsrc={animeData[0].imgsrc}
        title={animeData[0].title}
        animeName={animeData[0].animeName}
        link={animeData[0].link}
      />
        <Card
        key={animeData[1].id}
        imgsrc={animeData[1].imgsrc}
        title={animeData[1].title}
        animeName={animeData[1].animeName}
        link={animeData[1].link}
      />
      </>
    )
}

export default Netflix
