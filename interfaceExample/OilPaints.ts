class OilPaints implements IPaint{
    color: string;
    isWaterBased(): boolean {
        return false;;
    }
private _price:number;
set Price(price:number){this._price=price;}
get Price():number{return this._price;}

private _quality:string;
set Quality(quality:string){if(quality==='low' || quality==='medium'||quality==='high') this._quality=quality;}
get Quality():string{return this._quality;}


public constructor(price:number,quality:string, color: string){

    this._price=price;
    this._quality=quality;
    this.color=color;
}

}