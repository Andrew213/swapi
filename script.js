 import {findBtn,inputEl,selectEl,searchResult,getPersonInfo,getPlanetInfo,getShipInfo} from './swapiData.js';

window.onload = function () {

   const api = "https://swapi.dev/api/";


   class FetchData{
      getResponse = async url => {
   
               let response = await fetch(url)
   
           if(response.status === 200){
               return response.json()
           }
           throw new Error('Ошибка ' + response.status)
       };

       search = () => inputEl.value; 
   
       getPlanet = () => {
        return  this.getResponse( api + "planets/?search=" + this.search())
         };
       getStarShips = () => {
        return this.getResponse(api + "starships/?search=" + this.search())
         };
       getPeople =  () => {
         return this.getResponse(api + "people/?search=" + this.search())
         };
       
   };


function getSWAPIrequest (){
      
      searchResult.textContent = '';

      if (inputEl.value.length === 0 || !inputEl.value.trim()) {

         searchResult.textContent = 'Вы ничего не ввели'

      } else {
   
      if ( selectEl.selectedIndex === 0){

         let planets = new FetchData().getPlanet();
     
         planets.then(response=>{
            console.log(response.results)
         })

      }else if(selectEl.selectedIndex === 1){

         let ships = new FetchData().getStarShips();

         ships.then(response=>{
            console.log(response.results)
         })

      } else {

         // url = api + "people/?search="; 
      }

      // url += inputEl.value; 

     }

//       fetch(url)
//       .then(response => {

//       return response.json()

//       })
//       .then(response => {

//          if(response.count === 0){

//             searchResult.textContent = 'Ничего не найдено'

//          } else {
// console.log(response.results)
//             // const resultsArr = response.results;
            
//             // resultsArr.forEach( el => {

//             //    getSearchResults(el)

//             //    console.log(el)
//             // })
//          }
     
//       })
 }

// function getSearchResults(el){

//       const searchResult = document.querySelector('.search_result');
      
//       const liEl = document.createElement('li');
      
//       liEl.textContent = el.name;
         
//       searchResult.append(liEl);

//       liEl.addEventListener('click', function(){ 

//          if ( selectEl.selectedIndex === 0) {

//             getPlanetInfo(el)

//          }else if(selectEl.selectedIndex === 1){

//             getShipInfo(el)

//          } else {

//             getPersonInfo(el)

//          }
//       })
// }

findBtn.addEventListener('click', getSWAPIrequest)

  };












