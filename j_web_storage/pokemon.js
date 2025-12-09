function fetchData(){

    // via promises
    fetch('https://pokeapi.co/api/v2/pokemon?offset=1326&limit=6') // (?) is a query parameter
    .then((response) => {               //obtain the response and return the json format
        
        return response.json();
    })  

    .then((data)  => {                //work on the json response
        
        // if fetched data goes beyond 1328 characters, no more characters
        const returnedCharacters = data.results
        
        if(!returnedCharacters.length)
            throw new error("No Characters found.")         // gracefully handle the 'error'
        console.log(data);
    })     // work on the json response
    
    .catch((error)  => {
        console.log(error.message);
    });   // handle errors

}
fetchData();