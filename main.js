// -- selectors / variables
products = [ // list of product objects
    {
        id: 0,
        name: 'Album',
        price: 5.99,
        cartQuantity: 0,
        imgPath: 'images/album.jpg',
        getCartValue() {return Number((this.price*this.cartQuantity).toFixed(2))}
    },
    {
        id: 1,
        name: 'Shirt',
        price: 27.99,
        cartQuantity: 0,
        imgPath: 'images/shirt.jpg',
        getCartValue() {return Number((this.price*this.cartQuantity).toFixed(2))}
    },
    {
        id: 2,
        name: 'Coffee Cup',
        price: 4.99,
        cartQuantity: 0,
        imgPath: 'images/coffeecup.jpg',
        getCartValue() {return Number((this.price*this.cartQuantity).toFixed(2))}
    },
]

const tableBody = document.querySelector('#cart-table tbody')


// -- event listeners
// el-inputChange: listen to change of input field of all cart-items (no matter if they already exist or not: https://youtu.be/XF1_MlZ5l6M?t=961)
    // onchange:
        // get id of cart elem from HTML using RegEx (https://stackoverflow.com/a/1623227/12946000): HTML element id => `cart-item-${id}`
        // get new product quantity from value attribute of HTML input field
        // updateProduct(id, quantity=quanFromHTML)
document.addEventListener("change", event => {
    if (event.target.matches('.item-quantity')) {
        // console.log('input changed')
        let quanInputElem = event.target
        // console.log(quanInputElem)

        let ElemId = quanInputElem.closest('.cart-item').id
        // console.log(ElemId)
        
        let prodId = numFromString(ElemId)
        // console.log(prodId)

        // console.log(quanInputElem.value)
        if (Number(quanInputElem.value) < 1) {
            alert("cart quantity can't be smaller than 0 (click 'remove' to remove from cart)")
            quanInputElem.value = 1
            return
        }
        updateProduct(prodId, quanInputElem=quanInputElem.value)
    }
})


// -- functions
function add2Cart(elem) {
    // add prod to cart
        // get id of elem
        // get id from HTML of elem using RegEx (https://stackoverflow.com/a/1623227/12946000): HTML element id => `product-${id}` (numFromString())
        // if in cart (getCardElemById(regExId) !== undefined): alert: *This item is already in your cart* & return nothing
        // if not in cart (getCardElemById(regExId) === undefined): updateProduct()
    let productElem = elem.closest('.product')
    // console.log(productElem)
    // console.log(productElem.id)
    
    let dbProdId = numFromString(productElem.id)
    // console.log(dbProdId)

    if (document.querySelector(`#cart-item-${dbProdId}`) !==  null) {
        alert('This item is already in your cart')
        return
    }
    if (document.querySelector(`#cart-item-${dbProdId}`) === null) {
        updateProduct(dbProdId)
    }
}

function createCartElem(id) {
    // create a cart-item element with info from db (only create it!)
        // create new table row element with cart-item class and cart-item-X id
        // get product image path from db (based on id)
        // get product name from db (based on id)
        // get product price from db (based on id)
        // add product id to HTML of cart-item, based on index of product inside db (to access cart-item & product in db quickly): HTML element id => `cart-item-${id}` (numFromString())
    // return HTML elem
    const newTableRowElem = document.createElement('tr')
    newTableRowElem.classList.add('cart-item')
    newTableRowElem.id = `cart-item-${id}`
    // console.log('newTableRowElem:')
    // console.log(newTableRowElem)

    const imPath = products[id].imgPath
    const prodName = products[id].name
    const price = products[id].price
    const cartItemCol = `
    <td class="cart-item-column">
        <img class="cart-item-img" src="${imPath}" alt="">
        <span class="cart-item-name">${prodName}</span>
    </td>
    <td class="cart-price"><span class="cart-price-number">${price}</span><span class="cart-price-currency">€</span></td>
    <td class="cart-quantity">
        <input type="number" name="quantity" class="item-quantity" value="1">
                <button class="remove-btn" onclick="removeFromCart(this)">remove</button>
    </td>
    `
    newTableRowElem.innerHTML = cartItemCol

    return newTableRowElem
}

function updateTotal() {
    // update total price of cart based on price & quantity of all items in db with quantity > 0
    let cartTotal = Number()

    const cartValues = products.map(product => product.getCartValue())
    // console.log(cartValues)
    
    cartValues.forEach(cartValue => cartTotal = (Number(cartTotal) + Number(cartValue)).toFixed(2))
    // console.log(cartTotal)

    const cartTotalElem = document.querySelector('#cart-total-price-number')
    cartTotalElem.innerHTML = cartTotal
    // console.log(cartTotalElem)
}

function removeFromCart(elem) {
    // get cart-item elem
    // remove cart-item elem from HTML cart table body: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
    // get id of cart elem from HTML using RegEx (https://stackoverflow.com/a/1623227/12946000): HTML element id => `cart-item-${id}` (numFromString())
    // set cartQuantity of product in db to 0
    removeElem = elem.closest('.cart-item')
    // console.log(removeElem)
    removeElem.remove()

    const cartItemId = removeElem.id
    // console.log(cartItemId)
    const prodId = numFromString(cartItemId)
    // console.log(prodId)
    
    products[prodId].cartQuantity = 0
    // console.log(products)
}

function numFromString(stringg) {
    // console.log(stringg)
    let r = new RegExp("\\d+")  // find number in string: https://stackoverflow.com/a/1623227/12946000
    const num = stringg.match(r)
    // console.log(num)
    return Number(num) // Number or undefined
}

function updateProduct(id, quantity=undefined) {
    // update product - 1st in db, then in HTML
        // if cart-item with given id not in cart (document.querySelector(`#cart-item-${id}`) === null):
            // increase cartQuantity of product with respective id in db by 1 (product[id].cartQuantity += 1)
            // create cart-item (createCartElem())
            // append created cart-item to cart table body (tableBody.appendChild(newTableRowElem))
        // if cart-item with given id already in cart & quantity argument not undefined (document.querySelector(`#cart-item-${id}`) !== null && quantity !== undefined): // expected to never be true while attempting to add item to cart (because add2Cart() wouldn't call updateProduct() if respective product was already in cart)
            // update cartQuantity in product db via quantity argument (product[id].cartQuantity = quantity)
            // get cart value for cart-item from db (product[id].getCartValue())
            // update cart value (.cart-price-number) of cart-item HTML element, using gotten cart value from db
        // updateTotal()
    if (document.querySelector(`#cart-item-${id}`) === null) {
        // console.log(products[id].cartQuantity)
        products[id].cartQuantity += 1
        const cartItemElem = createCartElem(id)
        // console.log(cartItemElem)
        tableBody.appendChild(cartItemElem)
    }
    if (document.querySelector(`#cart-item-${id}`) !== null && quantity !== undefined) {
        products[id].cartQuantity = quantity
        // console.log(products[id].cartQuantity)
        let cartPrice = document.querySelector(`#cart-item-${id} .cart-price-number`)
        // console.log('cartPrice:')
        // console.log(cartPrice)
        cartPrice.innerHTML = (products[id].price * products[id].cartQuantity).toFixed(2)
        // console.log(`cart quantity of product ${products[id].name} updated: ${products[id].cartQuantity}`)
    }
    updateTotal()
}

function purchase() {
    // get list of all .cart-item elements inside tableBody
    // remove each .cart-item element in tableBody (forEach(removeFromCart()))
    // alert: *Thank you for your purchase*
    // update cart total price
    const cartItemElems = tableBody.querySelectorAll('.cart-item')
    // console.log(cartItemElems)

    // cartItemElems.forEach(cartItemElem => console.log(cartItemElem))
    cartItemElems.forEach(cartItemElem => removeFromCart(cartItemElem))

    alert('Thank your for your purchase')

    updateTotal()
}