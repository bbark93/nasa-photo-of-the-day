import React, { useState, useEffect} from "react";
import axios from "axios";

import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";

const dummyData = {
  date: "2023-06-21",
  explanation: "Does the Sun follow the same path every day? No.  The Sun's path changes during the year, tracing a longer route during the summer than the winter. Pictured here, the Sun's arc was captured from noon to sunset on three days,  from highest in the sky to lowest: summer solstice, equinox, and winter solstice.  The images were taken near Gatto Corvino Village in Sicily, Italy in 2020 and 2021. The path and time the Sun spends in the sky is more important in determining the season than how close the Earth is to the Sun.  In fact, the Earth is closest to the Sun in January, during northern winter.  Today is a solstice, so today the Sun is taking its longest path of the year across the sky in Earth's  northern hemisphere, but the shortest path in the southern hemisphere.",
  hdurl: "https://apod.nasa.gov/apod/image/2306/SunPath_Pace_960_annotated.jpg",
  title: "Three Sun Paths"
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="App">
      {data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;

/**

 */