{



const countWordOccurrences=(value:string,n:string): number=>{
const s :string[]= value.split(" ")
const p :string[] = s.filter(element => element==n);
const count :number = p.length
return count 
}







// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
1;























































    
}