{

interface Profile {
    name : string;
    age:number;
    
}

const getProperty =<Y extends keyof Profile>(obj:Profile,key:Y):Profile[Y] =>{
    return obj[key]
}













    
// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:















































}



















































    
