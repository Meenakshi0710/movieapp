
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState ,useRef} from 'react'
import ReactStars from "react-rating-stars-component";
import {
    Link
  } from "react-router-dom";

const ShowDetails = () => {
  const ref = useRef(null);
  const refClose = useRef(null);
  
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [article, setArticle] = useState({})
    const [rating, setRating] = useState(0)
    const [euser, setEuser] = useState({ user : " ", email : "", password : ""});
    
    const options = {
      count:10,
      edit : false,
      color : "rgba(20,20,20,0.1)",
      activeColor :"#FBA92C",
      size : window.innerWidth< 600? 20:25,
      value: rating,
      isHalf:true
    }
    
  const registerUser=()=>{
    ref.current.click();
    console.log("in updatenode")
  }
  
    const handleClick = () => {
      navigate(article.url);
   }
   const handleChange = (e) =>{
    setEuser({[e.target.name]: e.target.value})

   }
    const fetchDetails = async () =>{
        const url = `https://api.tvmaze.com/shows/${id}`;
        await fetch(url)
	.then(response => response.json())
	.then(response =>{
       
        
        
        console.log(response)
        setArticle(response);
        setRating(response.rating.average)
        
        
      })
	.catch(err => console.error(err));
        

    }
  
    useEffect(() => {
      
    fetchDetails()
     
    }, [id])
  return (
    <>
     <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Register User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form className='my-3'>
<div className="mb-3">
  <label htmlFor="title" className="form-label">Show</label>
  <input type="text" className="form-control" id="etitle" name = "etitle" value = {article.name} aria-describedby="emailHelp"/>
</div>
<div className="mb-3">
  <label htmlFor="description" className="form-label">User name</label>
  <input type="text" className="form-control" id="user" name = "user"  onChange = {handleChange}  minLength = {5} required/>
</div>
<div className="mb-3">
  <label htmlFor="tag" className="form-label">Email</label>
  <input type="text" className="form-control" id="email" name = "email"  onChange = {handleChange} />
</div>
<div className="mb-3">
  <label htmlFor="tag" className="form-label">Password</label>
  <input type="text" className="form-control" id="password" name = "password"  onChange = {handleChange} />
</div>
</form>
            </div>
            <div className="modal-footer">
              <button
                ref = {refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      
    <div className='container'>
      <div className='row'>
      <h1 className = "text-center" style = {{margin : "35px 0px", marginTop : "50px"}}>{article.name}</h1>
      <div className='col-md-8'>
    <div className="card border-0 ">
  <div className="row g-0">
  
    <div className="col-md-4">
      <img src="https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        
        <p className="card-text">{article.summary}</p>
        <button type="button" class="btn btn-primary" onClick = {registerUser}>Watch Now</button>
      </div></div> 
  </div>
</div>
</div>
<div className='col-md-4'>
<div className="card text-dark bg-info" style={{width: "18rem"}}>
 
  <div className="card-body">
  <h2>Show Info</h2>
  <div><strong>Network:</strong><span> {article.network&&article.network.name}</span></div>
  <div><strong>Schedule:</strong><span> {`${article.schedule&&article.schedule.days} at ${article.schedule&&article.schedule.time} (${article.averageRuntime} min)`}</span></div>
  <div><strong>Status:</strong><span> {article.status}</span></div>
  <div><strong>Show Type:</strong><span> {article.type}</span></div>
  <div><strong>Generes:</strong><span> {article.genres&&article.genres.toString()}</span></div>
  <div><strong>Language:</strong><span> {article.language}</span></div>
  <div><strong>Official site:</strong><span> {article.officialSite}</span></div>
  <div><ReactStars {...options}/></div>
  
  </div>
</div>
</div>
</div>

</div>
    </>
  )
}

export default ShowDetails