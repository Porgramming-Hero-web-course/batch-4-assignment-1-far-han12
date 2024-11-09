<!-- The significance of union and intersection types in Typescript. -->

Union and Intersection types are very useful features in TypeScript that helps us to keep our code type safe. Union types are represented by the | symbol which allows a variable to be one of many specified types. Besides, when we're working with a union type, we can only access methods and properties that are common to all the types in the union.Even if we try to use a property that isn't shared by every type, TypeScript will give us a compile-time error to prevent potential bugs.

<strong>Examples of Union Types:</strong>

type FrontendDeveloper = 'SeniorDeveloper'|'JuniorDeveloper'

const newDeveloper : FrontendDeveloper = 'SeniorDeveloper'
<!--  -->
let value: string | number;

value = "Hello"; 

value = 42

An intersection type is a way to combine multiple types into one.It is denoted by the symbol "&". Any value assigned to a variable with an intersection type must satisfy all the rules and properties of each type it combines.We can think of it as layering multiple blueprints. The final product must meet the requirements of every blueprint.When we build a robust applications in TypeScript, we often need to combine the structure of multiple types into one. This is where we can simply use intersection types to merge multiple types to one.

<strong>Examples of Intersection Types:</strong>

type Name = { name: string };

type Age = { age: number };

type Person = Name & Age;

const person: Person = { name: "Alice", age: 30 };

<!--  -->
type Admin = { admin: true; permissions: string[] };

type User = { userId: number; name: string };

type AdminUser = Admin & User;

const admin: AdminUser = {
  admin: true,
  permissions: ["READ", "WRITE"],
  userId: 1,
  name: "Bob",
};