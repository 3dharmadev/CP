let data = [];
let fecthCountries = async () => {
  // make an API
  let res =await fetch("https://restcountries.com/v3.1/all");
   data = await res.json();
  return data;
};


let countryCard = (el) => {
  let cardDiv = document.createElement("div");

  data.forEach((ele) => {
       
    let div=document.createElement("div");

    let Image = document.createElement("img");
    Image.src = ele.flags["png"];
    

    let Population = document.createElement("h1");
    Population.textContent = ele.population;
  

    let  Region = document.createElement("h2");
    Region.textContent = ele.region;

    let  CountryName = document.createElement("h2");
    CountryName.textContent = ele.name["common"];
     
    let cap=ele.capital[0];
    let Capital = document.createElement("h1");
    Capital.textContent = cap;
     
    div.append(CountryName,Image,Population,Region,Capital);
     cardDiv.append(div);
  });
  // create a div element for each card and append the details
//   Note : use textContent instead of inneText while appending the DOM elements

  return cardDiv;
};

let renderData = (data) => {
  let container = document.getElementById("all_countries");

  // loop through the cards and append to main container
  data.forEach((ele) => {
       
    let div=document.createElement("div");

    let Image = document.createElement("img");
    Image.src = ele.flags["png"];
    

    let Population = document.createElement("h1");
    Population.textContent = ele.population;
  

    let  Region = document.createElement("h2");
    Region.textContent = ele.region;
     Region.id="region";

    let  CountryName = document.createElement("h2");
    
    CountryName.textContent = ele.name["common"];
     
    let cap=ele.capital[0];
    let Capital = document.createElement("h1");
    Capital.textContent = cap;
     
    div.append(CountryName,Image,Population,Region,Capital);
     container.append(div);
  });
  return container;
};

let sortLogic = (order, data) => {
  // handle sort logic here and return sorted data
  // it expectes two arguments type of sort (asc or desc) and data
  
  if(order=="asc"){
    data.sort(function(a,b){
      return a.population-b.population;
    });
  }
  else if(order=="desc"){
     data.sort(function(a,b){
      return a.population-b.population;
    })
  }
   
  
  return data;
};
let filterByRegionLogic = (data, regionName) => {
  // handle filter logic here and return filtered data
  // it expectes two arguments data and region
  // return filteredData
 
 
  let filteredData =  data.filter((ele)=>{
    //let region=document.getElementById("region").value ;
      return regionName==ele.region;
    });
    return filteredData;

};
let handleSortAndFilter = () => {
// handle sortLogic and filterByLogic here 
   
};
window.onload = async function () {
  // onload fetch Countries from the `https://restcountries.com/v3.1/all`
  // add change event listeners to sort and filter
  let data = fecthCountries();
      
};

if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}
