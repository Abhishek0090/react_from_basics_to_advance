import React from "react";
import Card from "./Card";
import animeData from "./animeData";

const App = () => (
    <>
      <h1 className="heading_style">List of Top 3 Anime Series</h1>
      {animeData.map((val) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            animeName={val.animeName}
            link={val.link}
          />
        );
      })}
      ;
    </>
);

export default App;
