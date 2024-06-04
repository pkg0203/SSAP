// 페이지네이션

import React from 'react'
import "./Pagenation.css"

const Pagenation = ({currentPage, endPages, onPageChange}) => {
    const getPageRange = () => {
        const maxPageCount = 10
        const startIndex = maxPageCount * Math.floor((currentPage - 1) / maxPageCount)
        const startPage = Math.max(startIndex + 1, 1)
        const endPage = Math.min(startIndex + 10, endPages)
        return Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i)
    }

    const handlePageChange = (newPage) => {
        if(newPage > 0 && newPage <= endPages) {
            onPageChange(newPage)
        }
    }

    return (
        <div className={"pagenation_wrapper"}>
            <button onClick={() => handlePageChange(1)}>
                {'<<'}
            </button>

            <button onClick={() => handlePageChange(currentPage - 1)}>
                {'<'}
            </button>

            {getPageRange().map((page) => (
                <button key={page} onClick={() => handlePageChange(page)}>
                    {page}
                </button>
            ))}

            <button onClick={() => handlePageChange(currentPage + 1)}>
                {'>'}
            </button>

            <button onClick={() => handlePageChange(endPages)}>
                {'>>'}
            </button>
        </div>
    )
}

export default Pagenation