fetch('strange-products.json').then(function(response){
    return response.json();
    }).the(function(json){
        products = json;
        intitilize();
    }).catch(function(err){
        console.log('Fetch problem:' + err.message);
    });
    