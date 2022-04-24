import { context, logging, u128, RNG} from 'near-sdk-core';
import { GetCar, vec, car} from './model';

export function getCar(brand:string): void {
  const price = new GetCar(brand); 
  assert(
    context.attachedDeposit >= u128.from("2000000000000000000000000"), 
    "YOU HAVE TO ATTACH MINUMUM 2 NEAR"
  );
  if (brand=="AUDI"){
    let itemLiv = AUDI[rand] 
    logging.log("You have selected AUDI ! ")
    vec.push(itemLiv);  
    logging.log(`Seleceted item added storage : ${itemLiv.name} from ${itemLiv.club}`) 
  }
  else if (brand=="TESLA"){
    let itemPSG = TESLA[rand]
    logging.log("You have selected TESLA")
    vec.push(itemPSG);  
    logging.log(`Seleceted item added storage : ${itemPSG.name} from ${itemPSG.club}`) 
  }
  else if (brand=="PORCHE"){ 
    let itemManu = PORCHE[rand]
    logging.log("You have selected PORCHE")
    vec.push(itemManu);  
    logging.log(`Seleceted item added storage : ${itemManu.name} from ${itemManu.club}`) 
  }
  else {
    logging.log("You must select only 'AUDI','TESLA','PORCHE' !")
  }
}

// create car
 export let ModelS = new car("ModelS", "TESLA", "USA")
 export let ModelY = new car("ModelY", "TESLA", "USA")
 export let ModelX = new car("ModelX", "TESLA", "USA")
 export let cayenne = new car("cayenne", "PORCHE", "GERMANY")
 export let BOXTER = new car("BOXTER","PORCHE","GERMANY")
 export let TAYCAN = new car("TAYCAN","PORCHE", "GERMANY")
 export let A8 = new car("A8", "AUDI", "GERMANY")
 export let A7 = new car("A7", "AUDI", "GERMANY")
 export let A6 = new car("A6", "AUDI", "GERMANY")

 // create brand
 export let AUDI = [A8, A7, A6]
 export let PORCHE = [cayenne, BOXTER, TAYCAN]
 export let TESLA = [ModelS, ModelY, ModelX]
 
  // using the randomNum() function for random number
 function randomNum(): u32 {
   const rng = new RNG<u32>(1, 3);
   const roll = rng.next();
   return roll
 }
 let rand = randomNum();

 // read the given key from account (contract) storage


 
 