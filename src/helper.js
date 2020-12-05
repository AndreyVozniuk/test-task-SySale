export function calcPrice(price, volume, numItem){
  return price * (volume/100) * numItem
}