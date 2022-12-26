//js hint 

// function myFunc1() {
//   const namee = "Vaibhav";
//   function Hello() {
//     console.log(`Hello ${namee} how things going on`);
//   }
//   return Hello;
// }

// const result = myFunc1();
// //console.log(result);
// //result();

// console.log(result());

// Map functioning and its use

// const numbers = [23, 34, 43, 56, 69, 91];

// const qube = function (number){
//     return number * number * number;
// }

// const qubeNumber = numbers.map(qube);

// console.log(qubeNumber);

// var Employee = {
//   company: "xyz",
// };
// var emp1 = Object.create(Employee);
// delete emp1.company;
// console.log(emp1.company);

// var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
// delete trees[3];
// delete trees [0];
// console.log(trees.length);
// console.log(trees)

function App() {
  const names = ["akash", "akshay", "vaibs", "rani", "ramesh"];

  return (
    <div>
      {names.map((name, key) => {
        return <h1 key={key}>{name} </h1>;
      })}
    </div>
  );
}
