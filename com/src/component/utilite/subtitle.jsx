import React from 'react';
import '../../index.css'
import {Link} from 'react-router-dom';
const SubTitle = ({title,btntitle,path}) => {
  return (
    <div  style={{display:'flex',justifyContent:'space-between',marginTop:'10px',margin:'10px'}}>
      <div className="sub-title">
        {title}
      </div>
     <Link  to={`${path}`}  style={{textDecoration:'none'}}>
      <div className="shopping"  >
        {btntitle}
      </div>
     </Link>
    </div>
  )
}

export default SubTitle
