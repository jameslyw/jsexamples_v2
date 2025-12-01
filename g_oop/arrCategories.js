// storing objects inside an object
const arrCategories  = new Array( //instanttiating a new Array object
{ name: "Cat A", description: "Cars below 1600cc"}, // js object 1
{ name: "Cat B", description: "Cars above 1600CC"}, // js object 2
{ name: "Cat C", description: "Goods Vehicles and Buses"}, // js objct 3
);

// access arrCategories' length property
console.log(arrCategories.length);

// access arrCategories' index 0's property called name and description
console.log(arrCategories[0].name, arrCategories[0].description);

//print out all category name and description

for (let i = 0; i < arrCategories.length; i++){
    console.log(arrCategories[i].name, arrCategories[i].description);
}
    console.log("\n");

    arrCategories.push({name: "Cat E", description:" open"});

arrCategories.forEach((element) => {
    console.log(element.name, element.description);
});