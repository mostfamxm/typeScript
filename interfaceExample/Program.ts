function createPaints():IPaint{
let random:number=Math.floor(Math.random()*3)

switch(random){
    case 0: 
    return new Pencil("pincels",2,true,'yellow');
    case 1:
        return new Pen(0.5,2020,'gel','black');
    case 2: 
    return new OilPaints(60,'high','red');
    default:return null;    
}
}
const arrayPaint:IPaint[]=[createPaints(),createPaints(),createPaints()
    ,createPaints(),createPaints(),createPaints(),
    createPaints(),createPaints(),createPaints(),createPaints()
];

for(let i=0 ; i<arrayPaint.length ;i++){
    console.log("panit: "+arrayPaint[i].color);
    console.log('is water based :'+arrayPaint[i].isWaterBased());
}


