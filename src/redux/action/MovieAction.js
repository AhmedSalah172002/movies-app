import axios from "axios"



export const MovieAction=()=>{

    return async(dispatch)=>{
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c4831b5a26afaca3a7b01cf3e52ff1b4&language=ar")
        
        dispatch({type:"AllMovies",data:res.data.results,pages:res.data.total_pages})
    }
}

export const MovieSearch=(word)=>{

    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c4831b5a26afaca3a7b01cf3e52ff1b4&query=${word}&language=ar`)
        
        dispatch({type:"AllMovies",data:res.data.results,pages:res.data.total_pages})
    }
}

export const MoviePage=(page)=>{

    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c4831b5a26afaca3a7b01cf3e52ff1b4&language=ar&page=${page}`)
        
        dispatch({type:"AllMovies",data:res.data.results,pages:res.data.total_pages})
    }
}