import React from 'react'
import   './App.css';
import Card from './Card';
import Data from './Data';

export default function App() {
  return (
    <>
      <Card 
        imgsrc = {Data[0].imgsrc}
        cardName= {Data[0].cardName}
        summery={Data[0].summery}
        rating={Data[0].rating}
        releasedate={Data[0].releasedate}
        boxoffice={Data[0].boxoffice}
      />
      <Card 
        imgsrc = {Data[1].imgsrc}
        cardName= {Data[1].cardName}
        summery={Data[1].summery}
        rating={Data[1].rating}
        releasedate={Data[1].releasedate} 
        boxoffice={Data[1].boxoffice}

      />
      <Card 
        imgsrc = {Data[2].imgsrc}
        cardName= {Data[2].cardName}
        summery={Data[2].summery}
        rating={Data[2].rating}
        releasedate={Data[2].releasedate}
        boxoffice={Data[2].boxoffice}
      />
    </>
  )
};

