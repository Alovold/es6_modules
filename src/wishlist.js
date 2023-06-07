import { Car } from "./car";
export class WishList{
    constructor(){
        this.list = [];
        this.nextID = 0;
    }
    add(make, model, year){
        let carInstance = new Car(++this.nextID, make, model, year);
        this.list.push(carInstance);
    }
    remove(carId){
        this.list = this.list.filter((car) => car.id != carId);
    }
}
