 
var generate= document.querySelector("#generate")
var output= document.querySelector("#out")
window.onload =()=>{
getJoke()
}

async function getJoke(){
fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky?blacklistFlags=sexist,explicit").then(req => req.json()).then((out)=>{
if(out.type === "twopart"){
  output.innerHTML= out.setup+"\n\n"+out.delivery
}else{
getJoke()
}
}
  )

}



generate.ontouchstart= ()=>{
getJoke()
}
