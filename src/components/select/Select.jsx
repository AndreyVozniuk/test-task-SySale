import {useState} from 'react'
import './Select.scss'

export default function Select({width, options, setActiveOption, activeOption}) {
  const [bodyVisible, setBodyVisible] = useState(false)
  
  function toggleBodyVisible(){
    setBodyVisible(prev => !prev)
  }

  function optionClickHandler(e){
    setActiveOption(e.target.textContent)
    setBodyVisible(false)
  }

  function selectHoverHandler(){
    if(bodyVisible){
      setBodyVisible(false)
    }
  }

  return <div className='select' style={{width}} onMouseLeave={selectHoverHandler}>
    <div className='select__header' onClick={toggleBodyVisible}>
      <span className='select__current'>{activeOption || 'Цвет'}</span>
      <div className={`select__icon ${bodyVisible ? 'select__icon_hide' : 'select__icon_show'}`}>&#10095;</div>
    </div>

    <div className='select__body' style={{display: bodyVisible ? 'block' : 'none'}} onMouseLeave={selectHoverHandler}>
      {options.map((el, i) => 
        <div className='select__item' onClick={optionClickHandler} key={el + i}>{el}</div>
      )}
    </div>
  </div>
}