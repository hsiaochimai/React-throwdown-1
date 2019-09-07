import React from 'react'
import Card from './Card'
 export default function List(props){
    
       
         return(
             <div>Hi List!
                 <h1>{props.header}</h1>
                <Card card={props.cards}/>
             </div>
         )
     
 }