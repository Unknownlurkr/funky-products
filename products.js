var requestUrl = "https://unknownlurkr.github.io/funky-products/strange-products.json";

var req = new XMLHttpRequest();

req.open('GET', requestUrl);

req.responseType = 'json';

req.send();

req.onload = function(){
    var products = req.response;
    console.log(products);
    strangeProducts(products);
};

function strangeProducts(jsonObj){
    let strangeProd = jsonObj.strangeProducts;
    for(let i = 0; i < strangeProd.length; i++){
        let info = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let section = document.querySelector('section');
        img.setAttribute('src', 'C:/Users/bsamu/Documents/funky-products/img' + strangeProd[i].img);
        img.setAttribute('alt', strangeProd[i].name);
        h2.textContent = strangeProd[i].name;
        p1.textContent = 'details' + strangeProd[i].details;
        p2.textContent = 'price' + strangeProd[i].price;
        info.appendChild(img);
        info.appendChild(h2);
        info.appendChild(p1);
        info.appendChild(p2);
        section.appendChild(info);

    }
}