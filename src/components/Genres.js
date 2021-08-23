import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
     selectedGenres,
     setSelectedGenres,
     genres,
     setGenres,
     type,
     setPage,
   }) => {

     // remove and add functionallity in genres
     const handleAdd = (genre) => {
          setSelectedGenres([...selectedGenres, genre]); // keeping the prev and getting the new ones
          setGenres(genres.filter((g) => g.id !== genre.id)); //filtering out the new ones
          setPage(1);
        };
     
        const handleRemove = (genre) => {
          setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
          ); // removing the genres by using filter 
          setGenres([...genres, genre]); // adding back to prev array
          setPage(1);
        };

     const fetchGenres = async () => {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
          );
          setGenres(data.genres);
        };

        useEffect(() => {
          fetchGenres();

          // unmounting
          return () => {
               setGenres({});
          }

          // eslint-disable-next-line 
        }, [])
     return (
          <div style={{padding: "6px 0"}}>

               {selectedGenres.map((genre) => (
                    <Chip 
                         label={genre.name}
                         style={{margin: 2}}
                         clickable
                         size='small'
                         color='primary'
                         key={genre.id}
                         onDelete={() => handleRemove(genre)}
                    />
               ))}

               {genres.map((genre) => (
                    <Chip 
                         label={genre.name}
                         style={{margin: 2}}
                         clickable
                         size='small'
                         key={genre.id}
                         onClick={() => handleAdd(genre)}
                    />
               ))}
          </div>
     )
}

export default Genres
