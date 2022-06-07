document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const movie=document.querySelector('input').value.toLowerCase()
    let rand=Math.floor(Math.random()*6 +1)
    try{
        const response= await fetch(`https://movie-fire-one.herokuapp.com/api/${movie}/${rand}`)
        const data= await response.json()

        console.log(data)
        document.querySelector('h2').innerText=data.name
        document.querySelector('h3').innerText=data.year
    }catch(error){
        console.log(error)
    }
}


