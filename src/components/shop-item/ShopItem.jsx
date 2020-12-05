import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../redux/actions'
import {calcPrice} from '../../helper'
import Select from '../select/Select'
import compareIcon from '../../img/compare-icon.svg'
import './ShopItem.scss'

function createRadioBtnsObj(arr){
  return arr.map((el, i) => {
    return {value:el, checked: i === 0 ? true : false}
  })
}

export default function ShopItem({volumes, mainPhoto, hoverPhoto, price, name, showNewFlag, clickCompare}) {
  const dispatch = useDispatch()

  const [priceItem, setPriceItem] = useState(price)
  const [activeColor, setActiveColor] = useState('')
  const [compareItem, setCompareItem] = useState(clickCompare)
  const [numItem, setNumItem] = useState(1)
  const [radioBtns, setRadioBtns] = useState(createRadioBtnsObj(volumes))
  const [hoverOnPhoto, setHoverOnPhoto] = useState(false)

  useEffect(() => {
    setPriceItem(
      calcPrice(price, getVolumeValue(), numItem)
    )
  }, [numItem, radioBtns])

  function toogleRadioBtn(e){
    const newValue = e.target.dataset.select || e.target.textContent

    setRadioBtns(prev => {
      return prev.map(el => el.value === newValue ? {...el, checked: true} : {...el, checked: false} )
    })
  }
  
  function getVolumeValue(){
    return +radioBtns.find(el => el.checked === true).value.replace('мл', '')
  }

  function getItemData(){
    return {
      id: Date.now(),
      name,
      color: activeColor,
      actualPrice: priceItem,
      photo: mainPhoto,
      volume: getVolumeValue(),
      compareItem,
      numItems: numItem, 
      startPrice: price
    }
  }

  function addToBasket() {
    if(!activeColor){
      alert('Please select the color :)')
    }else{
      dispatch(addProduct( getItemData() ))
    }
  }

  return <div className='shop-item'>
    <div className='shop-item__status' style={{display: showNewFlag ? 'block' : 'none'}}>New</div>

    <button className='shop-item__compare' onClick={_ => setCompareItem(prev => !prev)}>
      <img src={compareIcon} alt='compare-icon' />
    </button>

    <div className='shop-item__photo' onMouseEnter={_ => setHoverOnPhoto(true)} onMouseLeave={_ => setHoverOnPhoto(false)}>
      <img src={!hoverOnPhoto ? mainPhoto : hoverPhoto} alt='shampoo'/>
    </div>

    <div className='shop-item__title'>{name}</div>

    <div className='shop-item__subtitle'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  Lorem ipsum dolor sit amet, co minim veniam, quis nostrud exercitation ullamco.
    </div>

    <div className='shop-item__info'>
      <div className='shop-item_center'>
        <Select 
        width='250px' 
        options={['Красный', 'Розовый', 'Оранжевый', 'Зелёный', 'Чёрный']}
        setActiveOption={setActiveColor}
        activeOption={activeColor}
        />
        <div className='shop-item__price'>{priceItem} грн</div>
      </div>

      <div className='shop-item__volumes'>
        {radioBtns.map((el, i) => {
          return <div className='shop-item__volume' key={el + i} onClick={toogleRadioBtn} data-select={el.value} id='select'>
            <div className='shop-item__radio-btn' data-select={el.value}>
              <div className='shop-item__radio-btn_active' style={{display:el.checked ? 'block' : 'none'}} data-select={el.value}></div>
            </div> 
            <div>{el.value}</div>
          </div>
        })}
      </div>

      <div className='shop-item__footer'>
        <div className='shop-item__counter'>
          <button onClick={() => setNumItem(prev => prev > 1 ? prev - 1 : prev)}>-</button>
          <span>{numItem}</span>
          <button onClick={() => setNumItem(prev => prev + 1)}>+</button>
        </div>
        <button className='shop-item__buy' onClick={addToBasket}>КУПИТЬ</button>
      </div>
    </div>
  </div>
}

