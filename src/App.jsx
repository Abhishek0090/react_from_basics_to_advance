import React from "react";
import Card from "./Card";
import animeData from "./animeData";
import Netflix from "./Netflix";
import Japanese from "./Japanese";

const favName = "Netflix";

const FavS = () => {
  if (favName === "Netflix") {
    return <Netflix />;
  } else {
    return <Japanese />;
  }
};

const App = () => (
  <>
    <h1 className="heading_style">List of Top 3 Anime Series</h1>
    <FavS />
    {/* {animeData.map((val) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            animeName={val.animeName}
            link={val.link}
          /> */}
    {/* );
      })} */}
    ;
  </>
);

export default App;
