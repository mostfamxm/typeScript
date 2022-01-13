class Adress{
private _country:string;
set Country(c:string){this._country=c; }
get Country ():string{return this._country;}

private _city:string;
set City(c:string){this._city=c;}
get City():string{return this._city;}

private _houseNumber:number;
set HouseNumber(h:number){this._houseNumber=h;}
get HouseNumber():number{return this._houseNumber;}

constructor(country:string,city:string,houseNumber:number){
this._houseNumber=houseNumber;
this._country=country;
this._city=city;
}
toString():string{
return `country ${this._country}  
city : ${this._city}
houseNumber : ${this._houseNumber}
`;
}


}