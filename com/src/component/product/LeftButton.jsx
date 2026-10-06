import React from 'react'
import Next from '../../assets/next.png';
import prev from '../../assets/prev.png'
const LeftButton = (onClick) => {
  return (
    <div>
      <img src={Next}  onClick={onClick} alt="" width='35px'  style={{float:'left',marginTop:'200px',cursor:'pointer'}}/>
    </div>
  )
}

export default LeftButton
