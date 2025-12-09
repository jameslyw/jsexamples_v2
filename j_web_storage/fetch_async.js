async function fetchData() {
  // TODO: fetch via async/await
try {

  // take note of the prepended keyword await

   const response = await fetch('https://reqres.in/api/users', {
  headers: { 'x-api-key': 'reqres_a23ca8212d3d48b88a83f4421776fc03' },
});

// handle errors gracefully
if(response.status ===403)
  throw new Error('Permission Denied, pleasse confirm authentication.');
else if(!response.ok)
  throw new Error('Network response is not ok.');

// take note of the prepended keyword await
const result = await response.json();
console.log(result);

} catch (error) {
  //manage the error messages incl. those custom ones
  console.log(error.message);
  }
  
}
fetchData();
