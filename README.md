# shoppingCart
- (frontend) shopping cart inspired by [*Web Dev Simplified* Tutorial](https://youtu.be/YeFzkC2awTM?list=PLZlA0Gpn_vH9xx-RRVNG187ETT2ekWFsq)
![shoppingCartVideo](shoppingCart.mp4)
## features
- [x] add to cart
  - [x] button
  - [ ] ~~cart update~~
- [x] remove from cart
  - [x] on remove button click
- [x] update price on in-/decreasing quantity
  - [x] update row price
  - [x] update total price
- [x] *This item is already in your cart* alert
- [x] purchase button
  - [x] alert: *Thank you for your purchase*
  - [x] remove all cart items
  - [x] update total price of cart

## Todo
<!-- - [x] add purchase button
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
- [ ] ([change table head cells to `<th>`](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics#adding_headers_with_th_elements)) -->

## potential improvements
- [ ] more usable input field in cart (especially for mobile) -> up/down buttons larger
- [ ] don't allow negative values in input field of cart (e.g. simply block steps below 1 &/OR alert when attempting to step below 1 to ask if item should be removed from cart (otherwise stays at 1))
- [ ] improve styling
- [ ] add backend (actually enable "real" purchases)
- [ ] use browser saving capabilities to save cart
- [ ] remember cart content when same user/browser returns back to page