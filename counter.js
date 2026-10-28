//let name = ["rutu", "msd", "hp", "mr.ipl", "kings"];
//const newName = name.map((name,index)=>{
  //  return `index of this name ${name} = ${index}`
//})
//console.log(newName)
//console.log(name)
//let int = [1,2,3,4,5]
//const num = int.filter((num, index)=>num%2==0)
//console.log(num)
//console.log(int)
const users = [
  { name: "Rutu", email: "rutu@example.com" },
  { name: "Msd", email: "msd@example.com" },
];
const user = users.find((user) => user.name === "Rutu");
if (user) {
  console.log(user.name, user.email);
}

