function fetchData() {
  // TODO: fetch via promise
fetch('https://reqres.in/api/users', {
  //headers: { 'x-api-key': 'reqres_a23ca8212d3d48b88a83f4421776fc03' }
}).then((response) => {
  
  // if the response has an issue throw a custom response gracefully
  if(response.status ===403)
    throw new Error('Permission denied. please check login status');
  else if(!response.ok)
    throw new Error('Network response is not ok');

  console.log(response);

  //if(!response.ok) 
  //throw new Error('Network response is not ok.');


  
  //otherwise return the response in JSON format
  return response.json();

})

.then ((result)=> {
  //logs out the data from the fetch request
  console.log(result.data);
})

.catch((error) => {
  console.log(error.message);
})
}

fetchData();