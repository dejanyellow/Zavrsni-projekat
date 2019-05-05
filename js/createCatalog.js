let telescope = (function(){

    const arr = [];
    let $catalog = $('#catalog');
    
    class Telescope {
        constructor(name,price,quantity,img){
            this.name = name,
            this.price = price,
            this.quantity = quantity,
            this.img = img
        }
    }
    
    
    function addToCatalog(name,price,quantity,img){
        const telescope = new Telescope(name,price,quantity,img);
        arr.push(telescope);
        createCatalog();
    }
    
    function createCatalog(){
        $catalog.html('');
        arr.forEach(function(element) {
        const {img,name,price} = element;
    
         let $telescope = $(`<div class = 'telescope'>
                            <img src = ${img} alt='${name}-img'>
                            <div><h2>${name}</h2></div>
                            <div>price(EUR)<input type = 'text' class = 'productPrice' value = '${price}' readonly></div>
                            <div>quantity: <input type = 'number' class = 'productQuantity' min = '0'></div>
                            <div>total price(EUR): <input type = 'number' class = 'productSum' readonly></div>
                            <button type = 'submit' class = 'add-to-cart' id = '${name}'>add to cart</button>
                        </div>`);
        $telescope.appendTo($catalog);
    });
    }
        return {
            addToCatalog
        }
    
    })();
    
    export default telescope;
    
    