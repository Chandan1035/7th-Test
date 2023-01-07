/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  const developers = arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const updatedArray = arr.filter(employee => employee.profession !== "admin");
  console.log(updatedArray);
}

function concatenateArray() {
  const newArray = [
    {id:5,name:"Raj",age:"28",profession:"intern"},
    {id:6,name:"Shyam",age:"24",profession:"admin"},
    {id:7,name:"Raju",age:"25",profession:"developer"}
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
