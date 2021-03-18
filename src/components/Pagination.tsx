/* Core */
import React    from 'react';
import { Link } from 'gatsby';
import styled   from 'styled-components';

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
        <PaginationStyles>
            <Link aria-disabled = { !hasPrevPage } to = { `${props.base}/${prevPage}` }>
                ← Prev
            </Link>
            {pagesJSX}
            <Link aria-disabled = { !hasNextPage } to = { `${props.base}/${nextPage}` }>
                → Next
            </Link>
        </PaginationStyles>
    );
};

/* Styles */
const PaginationStyles = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-items: center;
    margin: 2rem 0;
    border: 1px solid var(--grey);
    border-radius: 5px;

    & > * {
        display: flex;
        flex: 1;
        justify-content: center;
        padding: 1rem;
        user-select: none;
        border-right: 1px solid var(--grey);

        &[aria-current='page'] {
            color: var(--red);
        }

        &[aria-disabled='true'] {
            color: var(--grey);
            pointer-events: none;
        }
    }
`;

/* Types */
interface PaginationProps {
    pageSize: number;
    totalCount: number;
    currentPage: number;
    skip: number;
    base: string;
}
