{
  type Rectangle ={
    shape:"rectangle"
    width:number;
    height:number
}


type Circle ={
  shape:"circle"
  radius:number;

}

type Shape = Rectangle | Circle



const calculateShapeArea=(p1:Shape): number=>{

  if (p1.shape === "rectangle"){
    
      return p1.height* p1.width
  }
  else if(p1.shape === "circle"){
    const p:number = Math.PI * p1.radius*p1.radius
    const ans:string = p.toFixed(2)
    const ans1:number = parseFloat(ans)
   
    return ans1
  }
return 0

}










// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
// 78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
// 24;











































    
}