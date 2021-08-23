// logic we using again and again

const useGenre = (selectedGenres) => {
     if (selectedGenres.length < 1) return "";
   
     const GenreIds = selectedGenres.map((g) => g.id);
     return GenreIds.reduce((acc, curr) => acc + "," + curr); // accumulateor is 1st first value, current value
     // 1
     // 2
     // 3
     // 4

     // 1,2,3,4
};
   
   export default useGenre;