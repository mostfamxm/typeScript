class Course{
private _name:string;
set Name(name:string){this._name=name;}
get Name():string{return this._name;}

private _semester:string;
set Sems(s:string){if (s=='a'|| s=='b' || s=='summer') this._semester=s; }
get Sems():string{return this._semester;}

private _classNum:string;
set ClassNum(c:string){this._classNum=c;}
get ClassNum():string{return this._classNum;}


private _numOfStudents:number;
set NumOfStudents(n:number){if(n>=5 && n<=120) this._numOfStudents=n;}
get NumOfStudents():number{return this._numOfStudents;}

constructor(name:string,semester:string,classNum:string,numOfStudents:number){

    this._classNum=classNum;
    this._name=name;
    this._numOfStudents=numOfStudents;
    this._semester=semester;
}

toString():string{return` course name : ${this._name} 
semster : ${this._semester} 
number of students  : ${this._numOfStudents}
class number  : ${this._numOfStudents}
`;}

}