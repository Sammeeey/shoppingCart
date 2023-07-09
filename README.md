# shoppingCartKyle
- (frontend) simulation of shopping cart inspired by [*Web Dev Simplified* Tutorial](https://youtu.be/YeFzkC2awTM?list=PLZlA0Gpn_vH9xx-RRVNG187ETT2ekWFsq)

## features
- [ ] add to cart
  - [x] button
  - [x] ~~cart update~~
- [ ] remove from cart
  - [ ] on remove button click
- [ ] update price on in-/decreasing quantity
  - [x] update row price
  - [x] update total price
- [ ] *This item is already in your cart* alert
- [ ] purchase button
  - [ ] alert: *Thank you for your purchase*
  - [ ] remove all cart items

## Todo
- [x] add purchase button
- [x] add price to products in product section
- [x] don't just add new element to cart table - check if item existing & just increase quantity if already in cart
- [x] update prodPriceFromList to be able to get any value of given (as attribute) key
- [x] ~~track whether number of items in cart has increased or decreased (on change-event of input field)~~
- [x] update cartQuantity of product object whenever input value in cart changes (or rather always update input value from cartQuantity of product-object)
- [x] add total row to cart table
- [x] fix super-many decimal places in cart total!
- [ ] initially populate list of product object from HTML data (`.product`)
- [ ] remove dummy items from cart
- [ ] clean up unnecessary index code
- [ ] ([change table head cells to `<th>`](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics#adding_headers_with_th_elements))

## Todo main2.js
- [ ] 

## potential improvements
- [ ] more usable input field in cart (especially for mobile) -> up/down buttons larger
- [ ] don't allow negative values in input field of cart (e.g. simply block steps below 1 &/OR alert when attempting to step below 1 to ask if item should be removed from cart (otherwise stays at 1))