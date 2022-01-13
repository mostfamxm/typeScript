let myBooks:Book []=[new Book("b1",56,Category.Fantasy,level.Medium),new Book("b2",24,Category.Kids,level.Hight),new Book("b3",65,Category.Drama,level.Low)];

for(let book of myBooks){
    console.log(book.toString());

}
for (let b of myBooks){

    switch(b.Popularity){
case level.Hight:
    console.log("book is not avible");
    break;
case level.Medium:
    console.log("plase buy another version of this book");
    break;
case level.Low:
    console.log("enjoy this book");
    break;       
    }
}

