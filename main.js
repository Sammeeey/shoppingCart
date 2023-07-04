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

// -- script