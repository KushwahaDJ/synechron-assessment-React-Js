import axios from "axios";
import {useEffect, useState} from 'react';

const  Dashboard = () => {

    const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=d6d48dfb3375deaa7f42aafbc5d81e59";

      const [movie, setMovie] = useState([
          {
              original_title:"",
              backdrop_path:""
          }
      ]);
    
      useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log("res",response.data.results);
            setMovie(response.data.results);
        });
      }, []);
  console.log('movie',movie)

  return (
    
<div className="movie-list">
{movie.length > 0 && movie.map((item, index) => (
      <div key={index}>
        <div>{item.original_title}</div>
       <img src={item.backdrop_path} alt={item.backdrop_path}/>
      </div>
    ))}
    </div>
  );
}

export default Dashboard;