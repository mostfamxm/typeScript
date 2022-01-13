enum level{
Hight,
Medium,
Low
}

enum Category{
Fantasy,
History,
Kids,
Drama,
Newspaper
}
class Book{
private _name:string;
get Name():string{return this._name;}
set Name(n:string){this._name=n;}

private _pageAmount:number;
get PageAmount():number{return this._pageAmount;}
set PageAmount(p:number){if (p>=5&&p<=300) this._pageAmount=p;}

private _bookCategory:Category;
get Category():Category{return this._bookCategory;}
set Category(c:Category){this._bookCategory=c;}

private _Popularity:level;
get Popularity():level{return this._Popularity;}
set Popularity(p:level){this._Popularity=p;}


public constructor(name:string,pageAmount:number,bookCatgory:Category,poplairaty:level) {
this._name=name;
this._pageAmount=pageAmount;
this._bookCategory=bookCatgory;
this._Popularity=poplairaty;    
}
toString():string{

    return`Book Name:${this._name} 
    number of pages :${this._pageAmount}
    Catgory : ${Category[this._bookCategory]}
    popularity : ${level[this._Popularity]}`;
}

ReadBook():string{return`i read the book ${this._name}`;}

}

