import React, { useEffect, useState } from 'react'
import ShowItem from './ShowItem'

const Shows = () => {
  const [articles, setArticles] = useState([])
  

    const fetchData = async () =>{
        const url = "https://api.tvmaze.com/search/shows?q=all";
        await fetch(url)
	.then(response => response.json())
	.then(response =>{
       
        
        
        console.log(response)
        console.log(response[0].score)
        console.log(response[0].show.image.medium)
        setArticles(response);
        
        
        
      })
	.catch(err => console.error(err));
        

    }
        
    
    useEffect(() => {
      fetchData();
    
     
    }, [])
    
  return (
   <>
    <h1 className = "text-center" style = {{margin : "35px 0px", marginTop : "30px"}}>Top Shows</h1>
    <div className='container'>
                <div className = "row">
                {articles && articles.map((element)=>{
                    return <div className = "col-md-4" key = {element.show.id}>
                    <ShowItem element = {element}/>

                    </div>
                })}
                    
                    
                </div> 
                </div>
   </>
  )
}

export default Shows