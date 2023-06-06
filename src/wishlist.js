import { Car } from "./car";
export class WishList{
    constructor(list = [], nextID = 0){
        this.list = list;
        this.nextID = nextID;
    }
    add(make, model, year){
        let carInstance = new Car(++this.nextID, make, model, year);
        this.list.push(carInstance);
    }
    remove(carId){
        this.list.splice(carId, 1);
    }
}
