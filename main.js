// -- variables
adCartBtns = document.querySelectorAll('.add-cart-btn')
tableBody = document.querySelector('#cart-table tbody')
console.log(tableBody)
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
    const parentElem = elem.parentElement
    // console.log(parentElem)
    const prodName = parentElem.querySelector('.product-name').innerHTML

    return prodName
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
    if (existingCartItem) {
        // update price of found cart item
        // update amount of found cart item
        return
    }

    // if product not in cart: add new item/row for given product (add2Cart())
    // create new tableRow element
    const newTableRow = document.createElement('tr')
    
    // add new table row to body of cart table
    tableBody.appendChild(newTableRow)

    const cartItem = `
    <td class="cart-item">
        <img class="cart-item-img" src="${prodImgSrc}" alt="">
        <span class="cart-item-name">${prodName}</span>
    </td>
    <td class="cart-price"><span class="cart-price-number">${prodPrice}</span><span class="cart-price-currency">€</span></td>
    <td class="cart-quantity">
        <input type="number" name="quantity" id="item-quantity" value="1">
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
    // if is in cart: return respective .cart-item-name element
    // if not in cart: return false
    let alreadyInCart = false
    console.log(itemName)
    const cartItems = tableBody.querySelectorAll('.cart-item-name')
    console.log(cartItems)
    // const cartItemNames = cartItems.filter(cartItem => cartItem.innerHTML) // filter() doesn't work in typeof nodeList
    // console.log(cartItemNames)

    // check if given item is already in cart
    for (cartItem of cartItems){
        const cartItemName = cartItem.innerHTML
        console.log(`cartItem: ${cartItem}`)
        // console.log(`cartItemName: ${cartItemName}`)

        // if product already in cart: update amount and price (updateCartItem())
        if (cartItemName === itemName) {
            console.log(`${cartItemName} === ${itemName} (already in cart...gonna update it)`)
            alreadyInCart = true // kind of unnecessary when actually returning element instead of false eventually 
            return cartItem // return already existing cart item
        }
    }
    return alreadyInCart
}

// -- script