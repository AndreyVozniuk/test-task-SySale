import {useDispatch} from 'react-redux'
import {removeProduct} from '../../redux/actions'
import {useState, useEffect} from 'react'
import {calcPrice} from '../../helper'
import dumpIcon from '../../img/dump.svg'

import './BusketItem.scss'

export default function BusketItem({photo, name, color, volume, numItems, id, actualPrice, startPrice}) {
  const dispatch = useDispatch()

  const [priceItem, setPriceItem] = useState(actualPrice)
  const [numItem, setNumItem] = useState(numItems)

  useEffect(() => {
    setPriceItem(
      calcPrice(startPrice, volume, numItem)
    )
  }, [numItem])

  function removeItem() {
    dispatch(removeProduct(id))
  }
  return <>
    <div className='busket-item'>
      <div className='busket-item__photo'>
        <img src={photo} alt='busket item'/>
      </div>

      <div className='busket-item__name'>{name}</div>
      <div className='busket-item__color'>{color}</div>
      <div className='busket-item__volume'>{volume} мл</div>
      <div className='busket-item__counter'>
        <button onClick={() => setNumItem(prev => prev > 1 ? prev - 1 : prev)}>-</button>
        <span>{numItem}</span>
        <button onClick={() => setNumItem(prev => prev + 1)}>+</button>
      </div>
      <div className='busket-item__price'>{priceItem} грн</div>
      <button className='busket-item__delete' onClick={removeItem}>
        <img src={dumpIcon} alt='dump' />
      </button>
    </div>
    <div className='busket-item__line'></div>
  </>
}




