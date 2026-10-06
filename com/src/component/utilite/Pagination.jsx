import React from 'react'
import ReactPaginate from 'react-paginate';
import '../../index.css'
const Paginationn = ({pageCount,onpress}) => {
    function handlePageClick(data) {
        onpress(data.selected+1)
    }
  return (
   
     
      <ReactPaginate.default
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        // pageCount={pageCount}
        previousLabel="< السابق"
        renderOnZeroPageCount={null}
        pageCount={pageCount}
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={"active"}
      />

  )
}

export default Paginationn;
