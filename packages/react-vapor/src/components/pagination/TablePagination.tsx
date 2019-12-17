import * as React from 'react';
import {PaginationPagesNumber} from './PaginationPagesNumber';
import {PaginationPerPage} from './PaginationPerPage';

export class TablePagination extends React.PureComponent<{id: string}> {
    render() {
        return (
            <div className="pagination-container">
                <PaginationPerPage id={this.props.id} />
                <div className="flex-auto" />
                <PaginationPagesNumber id={this.props.id} pagesNumbers={7} />
            </div>
        );
    }
}

export const TablePaginationDefaultValue = {
    PerPage: [10, 20, 30],
    perPageLabel: 'Results per page',
};
