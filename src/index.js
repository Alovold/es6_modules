
// TODO
import { WishList } from "./wishlist";

let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
let pMake = document.querySelector("#car-make");
let pModel = document.querySelector("#car-model");
let pYear = document.querySelector("#car-year");
let removeBtn = document.querySelector(".removeBtn");
let wishlistUl = document.querySelector("#wishlistUl");
let currentWishlist = new WishList();

function showCarDetails(car){
    pMake.textContent = car.make;
    pModel.textContent = car.model;
    pYear.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
    console.log(car.id);
}

function updateDOMList(){
    wishlistUl.innerHTML = "";
    currentWishlist.list.forEach((car) => {
        let currentLi = document.createElement("li");
        currentLi.textContent = `${car.make}, ${car.model}`
        currentLi.addEventListener("click", () => showCarDetails(car));
        wishlistUl.appendChild(currentLi);
    });
}


function addCar(event){
    event.preventDefault();
    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    currentWishlist.add(make, model, year);
    updateDOMList();
}

function removeCar(){
    let carId = Number(removeBtn.getAttribute("data-carId"));
    currentWishlist.remove(carId);
    updateDOMList();
    pMake.textContent = "";
    pModel.textContent = "";
    pYear.textContent = "";
    removeBtn.disabled = true;
}

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

console.log(currentWishlist);