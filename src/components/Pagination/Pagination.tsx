/* Core */
import * as React from 'react';
import { Link }   from 'gatsby';

/* Instruments */
import { pagination as paginationStyles } from './styles.module.scss';

export const Pagination: React.FC<PaginationProps> = props => {
    const totalPages = Math.ceil(props.totalCount / props.pageSize);
    const prevPage = props.currentPage - 1;
    const nextPage = props.currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;

    const pagesJSX = [ ...Array(totalPages).keys() ].map((_, index) => {
        const pageNumber = index + 1;

        return (
            <Link key = { index } to = { `${props.base}/${pageNumber}` }>
                {pageNumber}
            </Link>
        );
    });

    return (
        <div className = { paginationStyles }>
            <Link aria-disabled = { !hasPrevPage } to = { `${props.base}/${prevPage}` }>
                ←&nbsp;
                <span className = 'word' title = 'Previous Page'>
                    Prev
                </span>
            </Link>
            {pagesJSX}
            <Link aria-disabled = { !hasNextPage } to = { `${props.base}/${nextPage}` }>
                <span className = 'word' title = 'Next Page'>
                    Next
                </span>
                &nbsp;→
            </Link>
        </div>
    );
};

/* Types */
interface PaginationProps {
    pageSize: number;
    totalCount: number;
    currentPage: number;
    skip: number;
    base: string;
}
