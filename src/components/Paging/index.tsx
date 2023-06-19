import React, { useState } from "react";
import './Paging.css';
import Pagination from "react-js-pagination";

const Paging = ({ page, count, setPage }) => {
  
  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={400}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={setPage}
      />
    </div>
  );
};
 
export default Paging;