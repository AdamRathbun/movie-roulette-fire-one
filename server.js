const express=require('express')
const app=expres()
const PORT=6000
const cors=require('cors')

app.use(cors())

let horror = {
    "1":{
        "year": 2007,
        "name": "Rec"
    },
    "2":{
        "year": 2017,
        "name": "Get Out"
    },
    "3":{
        "year": 2018,
        "name": "Gonjiam: Haunted Asylum"
    },
    "4":{
        "year": 1982,
        "name": "The Thing"
    },
    "5":{
        "year": 2017,
        "name": "It"
    },
    "6":{
        "year": 1977,
        "name": "Suspiria"
    }
}

let comedy = {
    "1":{
        "year": 1976,
        "name": "The Pink Panther Strikes Again"
    },
    "2":{
        "year": 2004,
        "name": "Kungfu Hustle"
    },
    "3":{
        "year": 2008,
        "name": "Tropic Thunder"
    },
    "4":{
        "year": 1982,
        "name": "The Thing"
    },
    "5":{
        "year": 1999,
        "name": "Office Space"
    },
    "6":{
        "year": 2007,
        "name": "Superbad"
    }
}

let scifi = {
    "1":{
        "year": 1999,
        "name": "The Matrix"
    },
    "2":{
        "year": 1991,
        "name": "Terminator 2: Judgment Day"
    },
    "3":{
        "year": 1986,
        "name": "Aliens"
    },
    "4":{
        "year": 1980,
        "name": "Star Wars: Episode V- The Empire Strikes Back"
    },
    "5":{
        "year": 2016,
        "name": "Arrival"
    },
    "6":{
        "year": 2010,
        "name": "Inception"
    }
}

let romance = {
    "1":{
        "year": 19,
        "name": "Roman Holiday"
    },
    "2":{
        "year": 1942,
        "name": "Casablanca"
    },
    "3":{
        "year": 2013,
        "name": "Her"
    },
    "4":{
        "year": 2004,
        "name": "Closer"
    },
    "5":{
        "year": 2012,
        "name": "The Silver Linings Playbook"
    },
    "6":{
        "year": 2004,
        "name": "Eternal Sunshine of the Spotless Mind"
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + 'index.html')
})

app.get('/main.js', (req, res)=>{
    res.sendFile(__dirname + 'main.js')
})

app.get('/api/horror/:name', (req, res)=>{
    const movie=req.params.name
    res.json(horror[movie])
})

app.get('/api/comedy/:name', (req, res)=>{
    const movie=req.params.name
    res.json(horror[movie])
})

app.get('/api/scifi/:name', (req, res)=>{
    const movie=req.params.name
    res.json(horror[movie])
})

app.get('/api/romance/:name', (req, res)=>{
    const movie=req.params.name
    res.json(horror[movie])
})


app.listen(process.env.PORT || PORT, () => {   //use the port heroku wants to use, or default port
    console.log(`Server running on port ${PORT}`)
})