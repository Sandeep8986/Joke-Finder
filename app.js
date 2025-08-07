
let url="https://icanhazdadjoke.com/";

let p = document.querySelector("p");


let button = document.querySelector("button");

  button.addEventListener("click",async()=>{
   p.innerText="loading...";
   let joke=await set();
   p.innerText=joke;
})
  
   async function set(){
    try {
  let res=await fetch(url,{headers:{Accept:"application/json"}});
  let data=await res.json();
  return  data.joke;
    } catch (error) {
      return("failed to fetch");
    }

}
