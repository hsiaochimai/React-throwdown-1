import React from 'react'

export default function Card(props){

    return(
        <div>
<h3>{props.title}</h3>
<p>{props.content}</p>
<button onClick={()=>props.deleteCard(props.id)}>Delete</button>

        </div>
    )
}