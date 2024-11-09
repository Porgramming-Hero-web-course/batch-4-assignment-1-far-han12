{
// 
const removeDuplicates = (value: number[]): number[] => {
    let newarray: number[] = []; 
  
    value.map((n) => {
      if (!newarray.includes(n)) {
        newarray.push(n);
      }
    });
  
    return newarray;

};


// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
// [1, 2, 3, 4, 5]

























































}