
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

function showCarDetails(car){
    pMake = car.make;
    pModel = car.model;
    pYear = car.year;
    removeBtn.disabled = false;
}