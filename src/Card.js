import React from 'react'

export default function Card(props){
    console.log(`hello Props`, props.card)
    const cardContent=props.card.map((card, i)=>
    <div key={i}>
        <h2>{card.title}</h2>
        <p>{card.content}</p>
        <button>Delete</button>
    
        
    </div>)
    return(
        <div>
{cardContent}

        </div>
    )
}