{

        interface Profile {
            name : string;
            age:number;
            email:string
        }
        
        const updateProfile =(value:Profile,n:Partial<Profile>) :number =>{
            const updatedProfile: Profile = { ...value, ...n };  
            return updatedProfile.age;
        }
        
        // Sample Input :
        const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
        console.log(updateProfile(myProfile, { age: 26 }));
        
        // Sample Output:
        // {
        //   name: "Alice",
        //   age: 26,
        //   email: "alice@example.com"
        // }
        
        
        







    }