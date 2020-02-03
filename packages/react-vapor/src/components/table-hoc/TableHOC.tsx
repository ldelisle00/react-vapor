import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {ActionBarConnected} from '../actions/ActionBar';
import {TableLoading} from '../loading/components/TableLoading';
import {PER_PAGE_NUMBERS} from '../navigation/perPage/NavigationPerPage';

/**
 * @deprecated Use WithServerSideProcessingProps directly instead
 */
export type IMaybeServerConfig = WithServerSideProcessingProps;

export interface ITableHOCOwnProps {
    id: string;
    isLoading?: boolean;
    hasActionButtons?: boolean;
    data: any[];
    renderBody: (data: any[]) => React.ReactNode;
    actions?: React.ReactNode[];
    tableHeader?: React.ReactNode;
    onUpdate?: () => void;
    containerClassName?: string;
    showBorderTop?: boolean;
    loading?: {
        numberOfColumns?: number;
        defaultLoadingRow?: number;
    };
}

export interface ITableHOCProps extends ITableHOCOwnProps {}

export class TableHOC extends React.PureComponent<ITableHOCProps & React.HTMLAttributes<HTMLTableElement>> {
    static defaultProps: Partial<ITableHOCOwnProps> = {
        isLoading: false,
        hasActionButtons: false,
        actions: [],
        showBorderTop: false,
        loading: {
            numberOfColumns: 5,
            defaultLoadingRow: PER_PAGE_NUMBERS[1],
        },
    };

    render() {
        const table = (
            <table className={classNames(this.props.className)}>
                {this.props.tableHeader}
                {this.props.isLoading && (
                    <TableLoading.Body
                        numberOfRow={
                            _.size(this.props.data) || (this.props?.loading?.defaultLoadingRow ?? PER_PAGE_NUMBERS[1])
                        }
                        numberOfColumns={this.props?.loading?.numberOfColumns ?? 5}
                    />
                )}
                <tbody className={classNames({hidden: this.props.isLoading})}>
                    {this.props.renderBody(this.props.data || [])}
                </tbody>
            </table>
        );

        return (
            <div className={classNames('table-container', this.props.containerClassName)}>
                {this.renderActions()}
                {table}
                {this.props.children}
            </div>
        );
    }

    private renderActions() {
        if (this.props.hasActionButtons || this.props.actions.length) {
            return (
                <ActionBarConnected
                    id={this.props.id}
                    removeDefaultContainerClasses
                    extraContainerClasses={classNames(
                        'coveo-table-actions-container',
                        'mod-cancel-header-padding',
                        'mod-align-header',
                        {
                            'mod-border-top': this.props.showBorderTop,
                        }
                    ).split(' ')}
                    disabled={this.props.isLoading}
                >
                    {this.props.actions}
                </ActionBarConnected>
            );
        }
        return null;
    }
}
