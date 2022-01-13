abstract class Person{
 private _name:string; 
 set Name(name:string){ this._name=name; }
 get Name():string{return this._name;}

 private _age:number;
 set Age(age:number){if(age>=1 && age<=120)  this._age=age;}
 get Age():number{return this._age;}

 private _id:string;
 set Id(id:string){this._id=id;}
 get Id():string{return this._id;}

 private _adress:Adress;
 set Adress(a:Adress){this._adress=a;}
 get Adress():Adress{return this._adress;}

 constructor(name:string,age:number,id:string,adress:Adress){
this._name=name;
this._id=id;
this._age=age;
this._adress=adress;
 }

 toString():string{return`Name: ${this._name} 
 age :${this._age} 
 id: ${this._id} 
 adress : ${this._adress.toString()} `;}
 


}