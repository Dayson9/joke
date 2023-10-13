var generate= document.querySelector("#generate")
var output= document.querySelector("#out")
var c= 0
window.onload =()=> {
getJoke()
}

async function getJoke(){
fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single").then(req => req.json()).then(out=> output.innerHTML= out.joke
)
}

generate.onclick= ()=>{
getJoke()
}

generate.ontouchstart= ()=>{
out.innerHTML= "Loading..."
generate.style.opacity= 0.5
var int= setInterval(()=>{
c+=100
if(c== 300){
generate.style.opacity= 1
clearInterval(int)
c= 0
}
},100)
} 
