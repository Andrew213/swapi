export const findBtn = document.querySelector('.button');
export const inputEl = document.querySelector('.input-search-js');
export const selectEl = document.querySelector('.select-category')
export const searchResult = document.querySelector('.search_result');

const dataBlockEl = document.querySelector('.data-block-js');

export function getPersonInfo (el) {
   const nameEl = document.querySelector('.name-js');
   const heightEl = document.querySelector('.height-js');
   const massEl = document.querySelector('.mass-js');
   const birthEl = document.querySelector('.birth-js');
   const filmsCountEl = document.querySelector('.filmsCount-js');
   
      nameEl.textContent = el.name;
      heightEl.textContent = el.height;
      massEl.textContent = el.mass;
      birthEl.textContent = el.birth_year;
      filmsCountEl.textContent = el.films.length;
   }
   
export  function getShipInfo (el) {
      const nameEl = document.querySelector('.shipName-js');
      const modelEl = document.querySelector('.model-js');
      const classShipEl = document.querySelector('.classShip-js');
      const pilotsEl = document.querySelector('.pilots-js');
      const filmsCountEl = document.querySelector('.shipFilmsCount-js');
   
      nameEl.textContent = el.name;
      modelEl.textContent = el.model;
      classShipEl.textContent = el.starship_class;
      pilotsEl.textContent = el.pilots.length
      filmsCountEl.textContent = el.films.length;
      }
   
export  function getPlanetInfo (el) {
         const nameEl = document.querySelector('.planetName-js');
         const climateEl = document.querySelector('.climate-js');
         const terrainEl = document.querySelector('.terrain-js');
         const gravityEl = document.querySelector('.gravity-js');
   
         nameEl.textContent = el.name;
         climateEl.textContent = el.climate;
         terrainEl.textContent = el.terrain;
         gravityEl.textContent = el.gravity;
   
         }


selectEl.addEventListener('change', () => {


   if ( selectEl.selectedIndex === 0)
{
   searchResult.textContent ='';
   dataBlockEl.textContent = '';
   dataBlockEl.innerHTML = ` <div class="planet_data">
   <div>Имя: <span id="name" class="planetName-js"></div>
   <div>Климат: <span id="height" class="climate-js"></div>
   <div>Местность: <span id="mass" class="terrain-js"></div>
   <div>Гравитация: <span id="birth_year" class="gravity-js"></div>
 </div>`
  
}else if(selectEl.selectedIndex === 1){

   searchResult.textContent ='';
   dataBlockEl.textContent = '';
   dataBlockEl.innerHTML = ` <div class="ship_data">
   <div>Имя: <span id="name" class="shipName-js"></div>
   <div>Модель: <span id="height" class="model-js"></div>
   <div>Класс звездолета: <span id="mass" class="classShip-js"></div>
   <div>Пилотов: <span class="pilots-js"></div>
   <div>В скольки фильмах появлялся: <span id="films_count" class="shipFilmsCount-js"></div>
 </div>`

} else {

   searchResult.textContent ='';
   dataBlockEl.textContent = '';
   dataBlockEl.innerHTML = `<div class="person_data">
   <div>Имя: <span id="name" class="name-js"></div>
   <div>Рост: <span id="height" class="height-js"></div>
   <div>Вес: <span id="mass" class="mass-js"></div>
   <div>Год рождения: <span id="birth_year" class="birth-js"></div>
   <div>В скольки фильмах появлялся: <span id="films_count" class="filmsCount-js"></div>
 </div>`

}

})