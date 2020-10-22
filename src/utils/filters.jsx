export const getCartList = (productObj, cartArray, cartId) => {
  const objCopy = JSON.parse(JSON.stringify(productObj)) // показать Саше
  let productArray = [];
  for (const key in objCopy) {
    productArray = [...productArray, ...objCopy[key]]
  }

  const result = productArray.filter(productItem => cartArray.some(cartItem => cartItem[cartId] === productItem[cartId]))
  result.forEach(item => {
    cartArray.forEach(cartItem => {
      if (cartItem.code === item.code) {
        item.quantity = cartItem.quantity
      }
    })
  })
   
  return result
}
