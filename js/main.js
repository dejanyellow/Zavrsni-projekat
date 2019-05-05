

let main =(function () {

    function init() {
        $catalog.on('click', buyTelescope);
        $catalog.on('input', calculateTotal);
        $shoppingCartContent.on('click', removeTelescope);
        $clearCartBtn.on('click', clearCart);
        $(document).on('DOMContentLoaded', clearCart);
    }
    const $catalog = $('#catalog'),
    $shoppingCartContent = $('#cart-content tbody'),
    $clearCartBtn = $('#clear-cart');
    let cart = 0;
    function buyTelescope(e) {
        e.preventDefault();
        if (e.target.classList.contains('add-to-cart')) {
            const telescope = e.target.parentElement;
            const quantity = e.target.parentElement.querySelector('.productQuantity');
            if (quantity.value < 0 || quantity.value === '') {
                quantity.style.border = '1px solid red';
                quantity.value = '';
                e.target.parentElement.querySelector('.productSum').value = '';
            } else {
                getTelescopeInfo(telescope);
            }
        }
    }

    function getTelescopeInfo(telescope) {
        const telescopeInfo = {
            image: telescope.querySelector('img').src,
            title: telescope.querySelector('h2').textContent,
            price: telescope.querySelector('.productPrice').value,
            quantity: parseInt(telescope.querySelector('.productQuantity').value),
            productSum: telescope.querySelector('.productSum').value,
            cart_id: cart
        }
        addIntoCart(telescopeInfo);
    }

    function calculateTotal(e) {
        let quantity = parseInt(e.target.value),
            price = parseInt(e.target.parentElement.parentElement.querySelector('.productPrice').value),
            productSum = e.target.parentElement.parentElement.querySelector('.productSum');
        e.target.style.border = '2px inset white';
        productSum.value = price * quantity;
    }

    function addIntoCart(telescope) {
        const row = $('<tr></tr>');
        const { title, price, quantity, image, productSum } = telescope;
        $(`    <td>
                 <img src="${image}" width=90px>
            </td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td>${productSum}</td>
            <td>
                <a href="#" class="remove" id="${cart++}">X</a>
            </td>
    `).appendTo(row);

        row.appendTo($shoppingCartContent);
        saveIntoStorage(telescope)
    }

    function saveTotalIntoStorage(telescopes) {
        let total = 0;
        telescopes.forEach(element => {
            total = parseInt(total) + parseInt(element.productSum);
        });
        document.getElementById('total').innerText = `Total: ${total} EUR`;
        sessionStorage.setItem('total', JSON.stringify(total));
    }

    function saveIntoStorage(telescope) {
        let telescopes = getTelescopeFromStorage();
        telescopes.push(telescope);
        saveTotalIntoStorage(telescopes);
        sessionStorage.setItem('telescopes', JSON.stringify(telescopes));
    }

    function getTelescopeFromStorage() {
        let telescopes;
        if (sessionStorage.getItem('telescopes') === null) {
            telescopes = [];
        } else {
            telescopes = JSON.parse(sessionStorage.getItem('telescopes'));
        }
        return telescopes;
    }

    function removeTelescope(e) {
        let telescope, telescopeId;
        if (e.target.classList.contains('remove')) {
            e.target.parentElement.parentElement.remove();
            telescope = e.target.parentElement.parentElement;
            telescopeId = telescope.querySelector('a').getAttribute('id');
            console.log(telescopeId);
        }
        removeTelescopeFromSessionStorage(telescopeId);
    }

    function removeTelescopeFromSessionStorage(id) {
        let telescopesLS = getTelescopeFromStorage();
        telescopesLS.forEach(function (telescopeLS, index) {
            if (telescopeLS.cart_id == id) {
                telescopesLS.splice(index, 1);
            }
        })

        sessionStorage.setItem('telescopes', JSON.stringify(telescopesLS));
        saveTotalIntoStorage(telescopesLS);
    }

    function clearCart() {
        clearSessionStorage();
        $shoppingCartContent.html('');
        $('#total').html('');

    }

    function clearSessionStorage() {
        sessionStorage.clear();
        cart = 1;
    }
    
    return {
        init
    }
})();


export default main
