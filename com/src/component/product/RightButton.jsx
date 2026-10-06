import React from 'react'
import Next from '../../assets/next.png';
import Prev from '../../assets/prev.png'
const RightButton = (onClick) => {
  return (
    <div>
      <img  onClick={onClick} src={Prev} alt="" width='35px'  style={{float:'right',marginTop:'200px',cursor:'pointer'}}/>
    </div>
  )
}

export default RightButton
