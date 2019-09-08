import React from 'react'
import Card from './Card'
 export default function List(props){
    const cardContent=props.cards.map((card, i)=>
    <Card
    key={i}
    id={card.id}
    title={card.title}
    content={card.content}
    deleteCard={(id)=>props.deleteCard(id)}
    
    />
  )
   
         return(
             <div>
                 <h1>{props.header}</h1>
               {cardContent}
             </div>
         )
     
 }