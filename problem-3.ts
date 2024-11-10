{



const countWordOccurrences=(value:string,n:string): number=>{
const s :string[]= value.toLowerCase().split(" ")
const p :string[] = s.filter(element => element==n);
const count :number = p.length
console.log(count);
return count 
}







// Sample Input:
countWordOccurrences("I love Typescript", "typescript");

// Sample Output:
1;























































    
}