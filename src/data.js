import shampooPhoto1 from './img/shampoo1.png'
import shampooPhotoHover1 from './img/shampoo1_hover.png'
import shampooPhoto2 from './img/shampoo2.png'
import shampooPhotoHover2 from './img/shampoo2_hover.png'
import shampooPhoto3 from './img/shampoo3.png'
import shampooPhotoHover3 from './img/shampoo3_hover.png'

export const defaultProducts = [
  {
    volumes: ['100мл', '200мл', '300мл'],
    mainPhoto: shampooPhoto1,
    hoverPhoto: shampooPhotoHover1,
    price: 200,
    name: 'Шампунь',
    showNewFlag: true, 
    clickCompare: true
  },
  {
    volumes: ['100мл', '200мл', '300мл'],
    mainPhoto: shampooPhoto2,
    hoverPhoto: shampooPhotoHover2,
    price: 200,
    name: 'Шампунь',
    showNewFlag: true,
    clickCompare: true
  },
  {
    volumes: ['100мл', '200мл', '300мл'],
    mainPhoto: shampooPhoto3,
    hoverPhoto: shampooPhotoHover3,
    price: 200,
    name: 'Шампунь',
    showNewFlag: false,
    clickCompare: false
  }
]