import React from 'react'
import Cardproductcontainer from './Cardproductcontainer'

const Carousel = ({dataproduct}) => {
    console.log(dataproduct)
  return (
    <>
    
<Cardproductcontainer   product={dataproduct} title='المزيد'  btntitle='الاكثر  مبيعا'  path='/products' />
    </>
  )
}

export default Carousel
