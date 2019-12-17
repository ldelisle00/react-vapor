import * as React from 'react';
import * as _ from 'underscore';
import {FlatSelectWithPrepend} from '../flatSelect/FlatSelectWithPrepend';
import {TablePaginationDefaultValue} from './TablePagination';

export interface IPaginationPerPageProps {
    id: string;
    perPage?: number[];
    defaultPerPageSelected?: number;
    label?: React.ReactNode;
}

export const PaginationPerPage = ({
    id,
    perPage = TablePaginationDefaultValue.PerPage,
    defaultPerPageSelected = TablePaginationDefaultValue.PerPage[1],
    label = TablePaginationDefaultValue.perPageLabel,
}: IPaginationPerPageProps) => {
    return (
        <>
            <FlatSelectWithPrepend
                id={`${id}_PerPage`}
                options={_.map(perPage, (nb: number) => ({
                    id: nb?.toString(),
                    option: {content: nb},
                }))}
                defaultSelectedOptionId={defaultPerPageSelected?.toString()}
                prependClassName="items-per-page"
                prepend={label}
            />
        </>
    );
};
