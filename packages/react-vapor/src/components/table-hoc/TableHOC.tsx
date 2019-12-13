import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {ActionBarConnected} from '../actions/ActionBar';
import {TableBodyLoading} from '../loading/components/TableLoading';

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
    numberOfColumn?: number;
    showBorderTop?: boolean;
    update?: (data: any) => void;
}

export interface ITableHOCProps extends ITableHOCOwnProps {}

export class TableHOC extends React.PureComponent<
    ITableHOCProps & React.HTMLAttributes<HTMLTableElement>,
    {isFirstRender: boolean}
> {
    static defaultProps: Partial<ITableHOCOwnProps> = {
        isLoading: false,
        hasActionButtons: false,
        actions: [],
        showBorderTop: false,
    };

    render() {
        const table = (
            <table className={classNames(this.props.className)}>
                {this.props.tableHeader}
                {this.props.isLoading ? (
                    <TableBodyLoading
                        numberOfRow={_.size(this.props.data) || 10}
                        numberOfColumn={this.props.numberOfColumn}
                    />
                ) : (
                    <tbody>{this.props.renderBody(this.props.data || [])}</tbody>
                )}
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
                    isLoading={this.props.isLoading}
                >
                    {this.props.actions}
                </ActionBarConnected>
            );
        }
        return null;
    }
}
