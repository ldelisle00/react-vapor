import * as $ from 'jquery';
import * as moment from 'moment';
import * as React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import * as _ from 'underscore';

import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IDispatch, IThunkAction} from '../../../utils/ReduxUtils';
import {IReactVaporTestState} from '../../../utils/tests/TestUtils';
import {LastUpdated} from '../../lastUpdated/LastUpdated';
import {Section} from '../../section/Section';
import {TableWithPaginationActions} from '../actions/TableWithPaginationActions';
import {TableHeaderWithSort} from '../TableHeaderWithSort';
import {TableHOC} from '../TableHOC';
import {TableRowNumberHeader} from '../TableRowNumberHeader';
import {tableWithActions} from '../TableWithActions';
import {tableWithBlankSlate} from '../TableWithBlankSlate';
import {tableWithDatePicker} from '../TableWithDatePicker';
import {tableWithFilter} from '../TableWithFilter';
import {tableWithPredicate} from '../TableWithPredicate';
import {tableWithSort} from '../TableWithSort';
import {tableWithUrlState} from '../TableWithUrlState';
import {TableHOCExampleUtils} from '../utils/TableHOCExampleUtils';
import {ITableHOCCompositeState, TableHOCUtils} from '../utils/TableHOCUtils';

type TableHOCServerProps = RouteComponentProps & ReturnType<typeof mapDispatchToProps>;

export interface IExampleRowData {
    city: string;
    email: string;

    username: string;
    dateOfBirth: Date;
    id: string;
}

export interface IExampleServerTableState {
    data: IExampleRowData[];
    isLoading: boolean;
}

interface TableHOCServerExamplesState {
    data: any[];
    isLoading: boolean;
}

export const TableHOCServerExamples: ExampleComponent = () => <TableHOCServer />;

TableHOCServerExamples.title = 'TableHOC server';

// start-print
export const TableHOCServerExampleId = 'complex-example';

const renderHeader = () => (
    <thead>
        <tr>
            <TableRowNumberHeader />
            <TableHeaderWithSort id="address.city" tableId={TableHOCServerExampleId}>
                City
            </TableHeaderWithSort>
            <TableHeaderWithSort id="email" tableId={TableHOCServerExampleId}>
                Email
            </TableHeaderWithSort>
            <TableHeaderWithSort id="username" tableId={TableHOCServerExampleId} isDefault>
                Username
            </TableHeaderWithSort>
            <th key="date-of-birth">Date of Birth</th>
            <th>{/* Empty th for the collapsible */}</th>
        </tr>
    </thead>
);

const mapDispatchToProps = (dispatch: IDispatch) => ({
    fetch: () => dispatch(TableHOCServerActions.fetchData()),
});

class TableExampleDisconnected extends React.PureComponent<TableHOCServerProps, TableHOCServerExamplesState> {
    state = {
        data: null,
        isLoading: true,
    };

    private fetch() {
        this.setState({...this.state, isLoading: true});
        window.setTimeout(
            () =>
                this.props.fetch().done((data: any) => {
                    this.setState({data, isLoading: false});
                }),
            500
        );
    }

    private onUpdate = () => {
        this.fetch();
    };

    private updateUrl = (query: string) => {
        this.props.history.push({search: query});
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        return (
            <Section title="Server table with numbered rows">
                <span className="block my2 text-grey-7">
                    Please note that the backend service doesn't support dates but we still make a request for every
                    change in the date range.
                </span>
                <ServerTableComposed
                    id={TableHOCServerExampleId}
                    className="table table-numbered mod-collapsible-rows"
                    data={this.state.data?.users ?? []}
                    renderBody={TableHOCExampleUtils.generateRows}
                    tableHeader={renderHeader()}
                    onUpdate={this.onUpdate}
                    onUpdateUrl={this.updateUrl}
                    isLoading={this.state.isLoading}
                >
                    <LastUpdated time={new Date()} />
                </ServerTableComposed>
            </Section>
        );
    }
}

const ServerTableComposed = _.compose(
    withServerSideProcessing,
    tableWithUrlState,
    tableWithBlankSlate({title: 'No data fetched from the server'}),
    tableWithPredicate({...TableHOCExampleUtils.tablePredicates[0]}),
    tableWithPredicate({...TableHOCExampleUtils.tablePredicates[1]}),
    tableWithFilter({
        placeholder: 'Filter all',
        blankSlate: {
            title: 'No results found',
        },
    }),
    tableWithDatePicker({...(TableHOCExampleUtils.tableDatePickerConfig as any)}),
    tableWithSort(),
    tableWithActions()
)(TableHOC);

const TableHOCServer = connect(undefined, mapDispatchToProps)(withRouter(TableExampleDisconnected));

const fetchData = (): IThunkAction => (dispatch: IDispatch, getState: () => IReactVaporTestState) => {
    const compositeState: ITableHOCCompositeState = TableHOCUtils.getCompositeState(
        TableHOCServerExampleId,
        getState()
    );
    const [from, to] = _.map(compositeState.dateLimits, (limit) => limit && limit.toISOString());
    const params: any = {
        _page: compositeState.pageNb + 1,
        _limit: compositeState.perPage,
        _sort: compositeState.sortKey,
        _order: compositeState.sortAscending ? 'asc' : 'desc',
        q: compositeState.filter || undefined,
        from,
        to,
    };
    _.each(compositeState.predicates, (predicate: {id: string; value: string}) => {
        params[predicate.id] = predicate.value;
    });
    return $.get('https://jsonplaceholder.typicode.com/users', params).then((response: any[], status, request) => {
        const count = request.getResponseHeader('x-total-count');
        const users = _.map(response, (user: any) => ({
            city: user.address.city,
            username: user.username,
            email: user.email,
            dateOfBirth: moment()
                .subtract(user.address.city.length, 'years')
                .toDate(), // fake a year of birth
        }));
        dispatch(TableWithPaginationActions.setCount(TableHOCServerExampleId, count as any));
        return {
            count,
            users,
        };
    });
};

export const TableHOCServerActions = {
    fetchData,
};
