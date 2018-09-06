const express = require('express');

const fs = require('fs');

const app = express();

const server = app.listen(3000, ()=>console.log('listening...'));

app.use(express.static('website'));


app.get('/all', (request, response)=>
    {
        let base = fs.readFileSync('coins.json');
        base = JSON.parse(base);
        response.send(base);
    }
);


app.use(express.urlencoded());

app.use(express.json());

app.post('/all', function(req, res) {
    let date = req.body;
    console.log(date);
    addToBase(date);
    res.send('ok');
  });

  function addToBase(coin){

    let coins = fs.readFileSync('coins.json');

    coins = JSON.parse(coins);

    let i = false;

    coins.forEach(element => {
        if (element['nominal']===coin['nominal'] && element['year']===coin['year']){
            i=true;
        }         
    });

    if (i==true){
        console.log('монета вже є в базі');
    }
    else {
        coins.push(coin);
        date = JSON.stringify(coins);
        fs.writeFileSync('coins.json', date, ()=>{console.log('error')});
        console.log(`монету додано`);    
    }
  }
   

  
