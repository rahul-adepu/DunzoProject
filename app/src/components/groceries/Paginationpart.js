import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './pagination.css';

function PaginationPart({ currentPage, totalPages, onPageChange }) {
    const handlePageClick = (page) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div id="outerpage">
            <Pagination id="page" size="lg">
                <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink first onClick={() => handlePageClick(1)} />
                </PaginationItem>
                <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink previous onClick={() => handlePageClick(currentPage - 1)} />
                </PaginationItem>
                {pages.map((page) => (
                    <PaginationItem key={page} active={currentPage === page}>
                        <PaginationLink onClick={() => handlePageClick(page)}>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem disabled={currentPage === totalPages}>
                    <PaginationLink next onClick={() => handlePageClick(currentPage + 1)} />
                </PaginationItem>
                <PaginationItem disabled={currentPage === totalPages}>
                    <PaginationLink last onClick={() => handlePageClick(totalPages)} />
                </PaginationItem>
            </Pagination>
        </div>
    );
}

export default PaginationPart;
