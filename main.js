// -- variables
const products = [
    {
        // id: 1,
        name: 'Album',
        price: 5.99,
        cartQuantity: 3,
        getCartValue() {return Number((this.price*this.cartQuantity).toFixed(2))}
    },
    {
        // id: 2,
        name: 'Shirt',
        price: 27.99,
        cartQuantity: 4,
        getCartValue() {return Number((this.price*this.cartQuantity).toFixed(2))}
    },
    {
        // id: 3,
        name: 'Coffee Cup',
        price: 4.99,
        cartQuantity: 5,
        getCartValue() {return Number((this.price*this.cartQuantity).toFixed(2))}
    },
]
let globalCartTotal = Number()
console.log(globalCartTotal)
// console.log(products[0].getCartValue())

adCartBtns = document.querySelectorAll('.add-cart-btn')
tableBody = document.querySelector('#cart-table tbody')
console.log(tableBody)
quantityInputs = document.querySelectorAll('.item-quantity')
quantityInputs.forEach(element => {
    element.addEventListener("change", function() {
        console.log(element)
        console.log(element.value)
        updateProdInfo(element, 'cartQuantity', Number(element.value))
        setCartItemPrice(element)
    })    // let quantityInputValue = element.value 
    // console.log(quantityInputValue)
});

// for (const adCartBtn of adCartBtns) {
//     console.log(adCartBtn)
// }

// -- functions
// function getParentElem(elem) {
//     console.log(elem)
//     parentElem = elem.parentElement
//     console.log(parentElem)    

//     return parentElem
// }

function getProdName(elem) {
    // console.log(elem)
    // const parentElem = elem.parentElement
    // // console.log(parentElem)
    // const prodName = parentElem.querySelector('.product-name').innerHTML
    console.log(elem)
    const product = elem.closest('.product')
    console.log(product)
    if (product) {
        // get prodName from product
        const prodName = product.querySelector('.product-name').innerHTML
        console.log(prodName)

        return prodName
    }
    
    const cartItem = elem.closest('.cart-item')
    console.log(cartItem)
    if (cartItem) {
        // get prodName from cart-item
        const prodName = cartItem.querySelector('.cart-item-name').innerHTML
        console.log(prodName)

        return prodName
    }
}

function getProdImgSrc(elem) {
    // console.log(elem)
    const parentElem = elem.parentElement
    // console.log(parentElem)
    const prodImgSrc = parentElem.querySelector('.product-img').src

    return prodImgSrc
}

function getProdPrice(elem) {
    // console.log(elem)
    const parentElem = elem.parentElement
    // console.log(parentElem)
    const prodPrice = parentElem.querySelector('.product-price-number').innerHTML

    return prodPrice
}

function add2Cart(elem) {
    console.log(elem)

    // get product data
    const prodName = getProdName(elem)
    console.log(prodName)
    
    const prodImgSrc = getProdImgSrc(elem)
    console.log(prodImgSrc)

    const prodPrice = getProdPrice(elem)
    console.log(prodPrice)

    // add product data to cart
    const existingCartItem = findCartItemByName(prodName)
    console.log(existingCartItem)
    if (existingCartItem) { // if product already in cart: update amount and price (updateCartItem())
        updateCartItem(elem, existingCartItem)
        return existingCartItem
    }

    // if product not in cart: add new item/row for given product (add2Cart())
    // create new tableRow element
    const newTableRow = document.createElement('tr')
    newTableRow.classList.add('cart-item')
    
    // add new table row to body of cart table
    tableBody.appendChild(newTableRow)

    const cartItem = `
    <td class="cart-item-column">
        <img class="cart-item-img" src="${prodImgSrc}" alt="">
        <span class="cart-item-name">${prodName}</span>
    </td>
    <td class="cart-price"><span class="cart-price-number">${prodPrice}</span><span class="cart-price-currency">€</span></td>
    <td class="cart-quantity">
        <input type="number" name="quantity" class="item-quantity" value="1">
                <button>remove</button>
    </td>
    `

    // append cartItem to new tablerow
    newTableRow.innerHTML = cartItem

    return {prodName, prodImgSrc, prodPrice, cartItem}
}

// function isAlreadyInCart(itemName) {
// // check if given item is already in cart (true/false)
//     let alreadyInCart = false
//     const cartItems = tableBody.querySelectorAll('.cart-item-name')
//     console.log(cartItems)
//     for (cartItemName of cartItems){
//         console.log(cartItemName.innerHTML)
//         if (cartItemName.innerHTML === itemName) {
//             console.log(`${cartItemName.innerHTML} === ${itemName}`)
//             alreadyInCart = true
//             return alreadyInCart
//         }
//     }
//     return alreadyInCart
// }

function findCartItemByName(itemName) {
// check if given item is already in cart
    // if is in cart: return respective .cart-item element
    // if not in cart: return false
    let alreadyInCart = false
    console.log(itemName)
    const cartItemNameElems = tableBody.querySelectorAll('.cart-item-name')
    console.log(cartItemNameElems)
    // const cartItemNameElems = cartItemNameElems.filter(cartItem => cartItem.innerHTML) // filter() doesn't work in typeof nodeList
    // console.log(cartItemNameElems)

    // check if given item is already in cart
    for (cartItemNameElem of cartItemNameElems){
        const cartItemName = cartItemNameElem.innerHTML
        console.log(`cartItemNameElem:`)
        console.log(cartItemNameElem)
        // console.log(`cartItemName: ${cartItemName}`)

        // if product already in cart: return whole .cart-item
        if (cartItemName === itemName) {
            console.log(`${cartItemName} === ${itemName} (already in cart)`)
            alreadyInCart = true // kind of unnecessary when actually returning element instead of false eventually 
            const cartItemElem = cartItemNameElem.closest('.cart-item')

            return cartItemElem // return already existing cart item
        }
    }
    return alreadyInCart
}

function updateCartItem(productElement, cartItemElement) {
    console.log(productElement)
    console.log(cartItemElement)
    
    // find cart item price
    const cartPriceElem = cartItemElement.querySelector('.cart-price-number')
    console.log(cartPriceElem)
    let cartPriceNum = parseFloat(cartPriceElem.innerHTML)
    console.log(cartPriceNum)
    
    // get product item price
    const prodPriceNum = parseFloat(getProdPrice(productElement))
    console.log(prodPriceNum)

    // update cart item price
    cartPriceElem.innerHTML = (cartPriceNum + prodPriceNum).toFixed(2)
    console.log(cartPriceElem.innerHTML)
    document.querySelector

    // find cart item amount
    const quantityElem = cartItemElement.querySelector('.item-quantity')
    console.log(`quantityElem:`)
    console.log(quantityElem)
    let quantityValue = quantityElem.value
    console.log(quantityValue)
    let quantityNum = Number(quantityElem.value)

    // update cart item amount (+1 by default)
    quantityNum += 1
    console.log(quantityNum)
    quantityElem.value = quantityNum
}

function findCartItemPrice() {
    
}

function findCartItemAmount() {

}

function prodInfoFromList(productName, infoKey) {
    // find object with productName in list of products
    for (prod of products) {
        if (prod.name === productName) {
            // get info of found product
            const prodInfo = prod[infoKey]
            console.log(`${infoKey}: ${prodInfo}`)
            return prodInfo
        } 
    }
}

function updateProdInfo(inputElem, infoKey, updateInfoValue) {
    // update certain info of product in list of products (pseudo-db)
    // find object with certain name in list of products
    inputProdName = getProdName(inputElem)
    for (prod of products) {
        if (prod.name === inputProdName) {
            // update info of found product
            prod[infoKey] = updateInfoValue
            console.log(`updateInfoValue: ${updateInfoValue}`)
            console.log(`prod[infoKey]: ${prod[infoKey]}`)
            return prod[infoKey]
        } 
    }
}

function setCartItemPrice(elem) {
    // get name of cart item from db
    prodName = getProdName(elem)
    console.log(`prodName: ${prodName}`)
    // get price of cart item from db
    const price = prodInfoFromList(prodName, 'price')
    // get quantity of cart item from db
    const quantity = prodInfoFromList(prodName, 'cartQuantity')
    // multiply quantity with price
    const cartPrice = price * quantity
    console.log(`cartPrice: ${cartPrice}`)
    // update cart item with new price
    const cartItemElem = findCartItemByName(prodName)
    cartItemElem.querySelector('.cart-price-number').innerHTML = cartPrice.toFixed(2)
    console.log(cartPrice)
    // update total price of cart
    updateCartTotal()
}

function updateCartTotal() {
    let cartTotalNumElem = document.querySelector('.cart-total-price-number')
    const cartValues = products.map(product => product.getCartValue())
    console.log(cartValues)
    globalCartTotal = Number(0)
    console.log(globalCartTotal)
    cartTotalNumElemText = cartValues.forEach(num => globalCartTotal += num)
    globalCartTotal = Number(globalCartTotal.toFixed(2))
    console.log(globalCartTotal)
    // update total price element
    cartTotalNumElem.innerHTML = globalCartTotal
}
// updateCartTotal()
// console.log(globalCartTotal)

// -- script