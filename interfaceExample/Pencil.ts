class Pencil implements IPaint{
    color: string;

    isWaterBased(): boolean {
        return false;
    }
    private _company:string;
    set Company(company:string){this._company=company;}
    get Company():string{return this._company;}

    private _size:number;
    set Size(size:number){if(size===2 || size===1 || size===3) this._size=size;}
    get Size():number{return this._size;}

    private _hasEraser:boolean;
    set HasEraser(has:boolean){this._hasEraser=has;}
    get HasEraser():boolean{return this._hasEraser;}


    public constructor(company:string,size:number,hasEraser:boolean,color: string){

        this._company=company;
        this._size=size;
        this._hasEraser=hasEraser;
        this.color=color;
    }


}

