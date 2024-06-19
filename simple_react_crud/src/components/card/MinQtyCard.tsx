import React from 'react';

interface ProductProps{
  name:string,
  image:string,
  dscription:string

}

function MinQtyCard(props:ProductProps){
    const StyleObj:React.CSSProperties = {
       width: '100%',
       marginBottom: '10px'
       
    }

    return(
        <>
        
        <div className="card mb-3" style={StyleObj}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.dscription}</p>
        
      </div>
    </div>
  </div>
</div>
</>
        
    )
}

export default MinQtyCard;