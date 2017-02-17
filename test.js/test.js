var myArray=['lol', 'lily', 'lulu'];
myArray.forEach(function(val){

  console.log(val.toUpperCase());
});


var newArray= myArray.map(function(val){
  return {name:val , species: "human"};

});
 console.log(newArray);
