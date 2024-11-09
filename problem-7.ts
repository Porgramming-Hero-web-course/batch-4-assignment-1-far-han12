{
class Car {
    constructor(public make:string,public model:string , public year:number){

    }

    getCarAge(){
        const currentyear:number = new Date().getFullYear();
        const count:number =  currentyear - this.year 
        return count
    }
}


// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
// 6 (assuming current year is 2024)


























































    
}