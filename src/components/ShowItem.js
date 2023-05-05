import React from 'react'
import {
    Link
  } from "react-router-dom";

const ShowItem = ({element}) => {
  return (
    <div className="my-3">
    <div className="card" >
    <div style = {{display : "flex",
                  justifyContent : "flex-end",
                  position: "absolute",
                  right : "0"}}>
    <span className="badge rounded-pill bg-danger" >{element.show.status}</span>
    </div>
    <img  src= {element.show.image?element.show.image.medium:"https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg"} className="card-img-top" alt="..."/>
    <div className="card-body">
    
      <h5 className="card-title">{element.show.name}</h5>
      <p className="card-text">{element.show.genres.toString()}</p>
      <Link to = {`/show/${element.show.id}`} className="btn btn-primary">Show Details</Link>
    </div>
  </div>
    </div>
  )
}

export default ShowItem