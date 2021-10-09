import React from 'react'
import Card from './Card'
import animeData from './animeData'

const Japanese = () => {
    return (
        <>
        <Card
            key={animeData[3].id}
            imgsrc={animeData[3].imgsrc}
            title={animeData[3].title}
            animeName={animeData[3].animeName}
            link={animeData[3].link}
          />
        <Card
            key={animeData[4].id}
            imgsrc={animeData[4].imgsrc}
            title={animeData[4].title}
            animeName={animeData[4].animeName}
            link={animeData[4].link}
          />
          </>
    )
}

export default Japanese
