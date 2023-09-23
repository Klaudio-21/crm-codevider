import './Pagination.css';
import React from "react";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
const Pagination = ({
    result,
    total,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(total / result);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    const buttonsToShow = 5;
    const currentGroup = Math.ceil(currentPage / buttonsToShow);
    const startPage = (currentGroup - 1) * buttonsToShow + 1;
    const endPage = Math.min(startPage + buttonsToShow - 1, totalPages);
    return (
        <div className="pagination">
            <button
                className=" page-button-left"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <BiFirstPage className="move-icon" />
            </button>
            {pageNumbers.slice(startPage - 1, endPage).map((number) => (
                <button
                    key={number}
                    className={`page-button ${currentPage === number ? "active" : ""}`}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </button>
            ))}
            <button
                className=" page-button-right"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <BiLastPage className="move-icon" />
            </button>
        </div>
    );
};
export default Pagination;