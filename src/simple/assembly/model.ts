import { context, u128, PersistentVector} from "near-sdk-as";

//create contract 
@nearBindgen
export class GetCar {
  sender: string;
  brand:string;
  premium:boolean;
  constructor(brand:string) {
    this.sender = context.sender;
    this.premium = context.attachedDeposit >= u128.from('2000000000000000000000000');
    this.brand=brand;
  }
}
//creat player class. It has name, club and country propeties.
@nearBindgen
export class car {
  name: string;
  club : string;
  country : string;
  constructor(name: string, club:string, country:string) {
    this.name = name;
    this.club = club;
    this.country = country;
  }
}

export const vec = new PersistentVector<car>("s")

