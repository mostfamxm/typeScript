class Pen implements IPaint{
    color: string;
    isWaterBased(): boolean {
    return true;
    }
    
    private _size:number;
    set Size(size:number){if(size===0.4 || size===0.5 || size===0.7) this._size=size;}
    get Size():number{return this._size;}

    private _year:number;
    set Year (year:number){if(year>=2018 && year <= 2021)this._year=year;}
    get Year ():number{return this._year;}

    private _type:string;
    set Type(type:string){if(type==='gel' || type==='ink'|| type==='brush') this._type=type;}
    get Type():string{return this._type;}

    public constructor(size:number,year:number,type:string,color: string){
this._size=size;
this._year=year;
this._type=type;
this.color=color;
    }
}