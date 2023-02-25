const meals = () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then((response) => response.json())
    .then((data) => displayMeals(data.meals));
    getinput.value = '';
};

const  butonclicked = () => {
  let getinput = document.getElementById("inputmeal");
  let getinputvalue = getinput.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${getinputvalue}`)
  .then((response) => response.json())
  .then((data) => displayMeals(data.meals));
  getinput.value = '';
}

const displayMeals = (showmeal) => {
  let mealcontainer = document.getElementById("container-meals");
  mealcontainer.innerHTML = '';
  showmeal.forEach((meal) => {
    // const {strMealThumb, strMeal, strInstructions } = meal;
    let div = document.createElement("div");
    
    div.innerHTML = `
     <div class="col">
                  <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <button onclick="loadmealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Details
                      </button>
                    </div>
                  </div>
                </div>

    `;
    mealcontainer.appendChild(div);
    console.log(meal);
  });
};



const loadmealDetail = idMeal => {
  console.log(idMeal)
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
  .then(res => res.json())
  .then(data => showdetails(data.meals))

}
function showdetails(mealdetail) {
  // console.log(mealdetail)
  let modalcontailmeal = document.getElementById('exampleModal');
  for (const detailsmeal of mealdetail) {
    document.getElementById('exampleModalLabel').innerText = detailsmeal.strMeal;
    document.getElementById('modal-body').innerText = detailsmeal.strInstructions};
    document.getElementById('image').innerHTML = `
    <img width="200px" height="200px"  src="${detailsmeal.strMealThumb}" alt="">
    `;
    document.getElementById('Sourse').innerHTML = `
    <a target="_blank" href="${detailsmeal.strSource}">Source</a>
    `
    document.getElementById('Youtube').innerHTML = `
    <a target="_blank" href="${detailsmeal.strYoutube}">YouTube</a>
    `
    console.log(detailsmeal)
    // let div = document.createElement('div')
    // div.innerHTML = `
    // `

    
  }

// document.getElementById('exampleModalLabel').innerText = meal.strMeal;

meals()