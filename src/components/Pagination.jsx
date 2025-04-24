import React from 'react'

function Pagination({currentPage,totalPages,onPageChange}) {
    const pages=[];
    for (let i = 1;  i<= totalPages.length; ++i) {
       pages.push(i)
        
    }
  return (
    <div className='pagination'>
        {
          pages.map((page,index)=>(
            <React.Fragment key={page}>
{
    index>0&&index%5===0 &&(
        <span className='dots'>
....
        </span>
    )
}
<button className={currentPage===page? 'active':""} onClick={()=>onPageChange(page)}>
{page}
</button>
            </React.Fragment>
          ))  
        }
    </div>
  )
}

export default Pagination