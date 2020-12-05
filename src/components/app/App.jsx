import {useSelector} from 'react-redux'
import ShopItem from '../shop-item/ShopItem'
import BusketItem from './../busket-item/BusketItem'
import {defaultProducts} from './../../data'

import './App.scss'

function App() {
  const busketProducts = useSelector(state => state.busketProducts)

  return <div className='container'>
    <div className='shop'>
      <div className='shop__items'>
        {defaultProducts.map((el, i) => <ShopItem key={el + i} {...el}/>)}
      </div>

      <div className='shop-busket'>
        <div className='shop-busket__title'>Корзина</div>
        <div className='shop-busket__items'>
          {
            !busketProducts.length ? <div style={{textAlign: 'center', fontSize: '25px'}}>{`Корзина пустая =(`}</div> :
            busketProducts.map((el, i) => <BusketItem key={el + i} {...el} />)
          }
        </div>
      </div>
    </div>
  </div>
}

export default App
