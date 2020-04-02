/*
Module 4 project using promises 
Brittany Samuels-200404362
*/
let ref = 'https://unknownlurkr.github.io/Villa-Rental/img/home.jpg';
let items = '';
//grabbing the image from my git hub repo
    fetch(ref).then(response =>{
        console.log(response);
        return response.blob();
    })
    .then(blob =>{
        console.log(blob);
        document.getElementById('itm').src = URL.createObjectURL(blob);
    })













/*fetch(req).then(function(reponse){
    return reponse.json();
}).then(function(text){
    
    
})*/



/*let info = document.createElement('article');
let h2 = document.createElement('h2');
let img = document.createElement('img');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let section = document.querySelector('section');
img.setAttribute('src', 'https://unknownlurkr.github.io/funky-products/img/' + strangeProd[i].imageLocation);
img.setAttribute('alt', strangeProd[i].name);
h2.textContent = strangeProd[i].name;
p1.textContent = 'details' + strangeProd[i].details;
p2.textContent = 'price' + strangeProd[i].price;
info.appendChild(img);
info.appendChild(h2);
info.appendChild(p1);
info.appendChild(p2);
section.appendChild(info);


\*
let sec = document.querySelector('section');

function strangeProducts(section){
    let strangeProd = section.strangeProducts;
    for(let i = 0; i < strangeProd.length; i++){
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let info = document.createElement('article');
        h2.textContent = strangeProd[i].name;
        p1.textContent = 'details' + strangeProd[i].details;
        p2.textContent = 'price' + strangeProd[i].price;
        info.appendChild(h2);
        info.appendChild(p1);
        info.appendChild(p2);
    }
    fetch(url).then(function(reponse){
        return reponse.json();
    }).then(function(json){
        let items = json;
        initialize(items);
        console.log(json);
        
    });
    fetch(url).then(function(reponse){
        return reponse.json();
    }).then(function(data){
        strangeProducts(data);
        console.log(data);
    });

    
    //NOTE TO SELF WHILE ON BREAK JUST GRAB THE TEXT DATAT AS IN FETCH EXAMPLE
    //FUCK GRABING HE JSON SPECIFICALLY

}

*\

































/*let display = document.querySelector('select');

/*display.onchange = function(){
    let forSale = select.value;
    clearanceProducts(forSale);
}*/



//clearanceProducts()
/*function clearanceProducts(forSale){
    forSale = forSale('', ' ');



}



/*fetch(url,{
   method: 'GET' 
    })
    .then(function(response){
    return response.json();
    })
    .then(function(json){

    });*/
