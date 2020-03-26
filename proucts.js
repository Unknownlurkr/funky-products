var requestUrl = "https://unknownlurkr.github.io/funky-products/strange-products.json";

var req = new XMLHttpRequest();

req.open('GET', requestUrl);

req.responseType = 'json';

requestUrl.send();

requestUrl.onload = function(){
    var strangeProduct = req.response;
    console.log(strangeProduct);
    products(strangeProdcut);
}

function strangeProducts(jsonObj){
    let strangeProducts = jsonObj.strangeProducts;
    for(let i = 0; i < strangeProducts.length; i++){
        let info = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let section = document.querySelector('section');
        img.setAttribute('src', 'https://unknownlurkr.github.io/funky-products/img' + strangeProducts[i].image);
        img.setAttribute('alt', strangeProducts[i].name);
        h2.textContent = strangeProdcuts[i].name;
        p1.textContent = 'details' + strangeProducts[i].details;
        p2.textContent = 'price' + strangeProducts[i].price;
        info.appendChild(img);
        info.appendChild(h2);
        info.appendChild(p1);
        info.appendChild(p2);
        section.appendChild(article);

    }
}