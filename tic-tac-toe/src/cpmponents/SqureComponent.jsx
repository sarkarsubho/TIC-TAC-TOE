import React from 'react';

export const SqureComponent = (props) => {
  const classes =props.className ? `${props.className} sqrcomponente`:"sqrcomponente"
  return (
    
       <span  className={classes} onClick={props.onClick}>{props.state}</span>
    
   
  )
}
