class Student extends Person{

private _year:number;
set Year(y:number){if(y>=1 && y<=8)  this._year=y;}
get Year():number{return this._year;}

private _avg:number;
 set Avg(a:number){if(a>=0 && a<=100) this._avg=a; }
get Avg():number{return this._avg;}

private _courses:Course[];
set Courses(c:Course[]){this._courses=c;}
get Courses():Course[] {return this._courses;}

toString():string{
     for(const course of this._courses){
        
        
        console.log(course.toString);
    }
    return`Name: ${this.Name} 
age :${this.Age} 
id: ${this.Id} 
adress : ${this.Adress.toString()}
year: ${this._year}
avarge :${this._avg}

`;

}
}


