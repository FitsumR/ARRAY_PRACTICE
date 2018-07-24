const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const body = document.querySelector("body");
const script = document.querySelector("script")
const mainContent = document.createElement("div");
mainContent.setAttribute("id", "planets");

body.insertBefore(mainContent, script);


const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach(function(string){
    planetEl.innerHTML +=
    `<h2>${string}</h2>`
});

/*....*/
newArray = planets.map(function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
 
  console.log(newArray);

  /*.....*/

  newArray = planets.map(function(str){
    let upperCase = str.charAt(0).toUpperCase();
    let restOfWord = str.slice(1);
    return upperCase  + restOfWord;
});


/*----------

function addArrayToDOM(array){
    array.forEach(function(index){
        planetEl.innerHTML +=
            `<h2>${index}</h2>`
    });   

   ------ */




    function addArrayToDOM(array){
        array.forEach(function(index){
            planetEl.innerHTML +=
                `<h2>${index}</h2>`
        })
    }






    
    addArrayToDOM(planets);

    newArray = planets.map(function(str){
        let upperCase = str.charAt(0).toUpperCase();
        let restOfWord = str.slice(1);
        return upperCase  + restOfWord;
    });

    





    newArray = planets.map(function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
      });
     
      console.log(newArray);