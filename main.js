// -- variables
adCartBtns = document.querySelectorAll('.add-cart-btn')
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


    return {prodName, prodImgSrc, prodPrice}
}

// -- script