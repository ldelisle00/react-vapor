(window.webpackJsonp=window.webpackJsonp||[]).push([[804],{1903:function(e,r,t){"use strict";t.r(r),r.default="import * as $ from 'jquery';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport {RouteComponentProps, withRouter} from 'react-router';\r\nimport * as _ from 'underscore';\r\n\r\nimport {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {IDispatch, IThunkAction} from '../../../utils/ReduxUtils';\r\nimport {IReactVaporTestState} from '../../../utils/tests/TestUtils';\r\nimport {filterThrough} from '../../filterBox';\r\nimport {LastUpdated} from '../../lastUpdated/LastUpdated';\r\nimport {Section} from '../../section/Section';\r\nimport {TableWithPaginationActions} from '../actions/TableWithPaginationActions';\r\nimport {TableHeaderWithSort} from '../TableHeaderWithSort';\r\nimport {TableHOC} from '../TableHOC';\r\nimport {TableRowHeader} from '../TableRowHeader';\r\nimport {TableRowNumberHeader} from '../TableRowNumberHeader';\r\nimport {tableWithActions} from '../TableWithActions';\r\nimport {tableWithBlankSlate} from '../TableWithBlankSlate';\r\nimport {tableWithDatePicker} from '../TableWithDatePicker';\r\nimport {tableWithFilter} from '../TableWithFilter';\r\nimport {tableWithNewPagination} from '../TableWithNewPagination';\r\nimport {tableWithPredicate} from '../TableWithPredicate';\r\nimport {tableWithSort} from '../TableWithSort';\r\nimport {tableWithUrlState} from '../TableWithUrlState';\r\nimport {TableHOCExampleUtils, TableHOCServerExampleContext} from '../utils/TableHOCExampleUtils';\r\nimport {ITableHOCCompositeState, TableHOCUtils} from '../utils/TableHOCUtils';\r\n\r\ntype TableHOCServerProps = RouteComponentProps & ReturnType<typeof mapDispatchToProps>;\r\n\r\nexport interface IExampleRowData {\r\n    city: string;\r\n    email: string;\r\n    username: string;\r\n    dateOfBirth: Date;\r\n    id: string;\r\n}\r\n\r\nexport interface IExampleServerTableState {\r\n    data: IExampleRowData[];\r\n    isLoading: boolean;\r\n}\r\n\r\ninterface TableHOCServerExamplesState {\r\n    data: {users: [any]; count: number};\r\n    isLoading: boolean;\r\n}\r\n\r\nexport const TableHOCServerExamples = () => <TableHOCServer />;\r\n\r\nTableHOCServerExamples.title = 'TableHOC server';\r\n\r\n// start-print\r\nexport const TableHOCServerExampleId = 'complex-example';\r\n\r\nconst renderHeader = () => (\r\n    <TableHOCServerExampleContext.Consumer>\r\n        {({isLoading}) => (\r\n            <thead>\r\n                <tr>\r\n                    <TableRowNumberHeader isLoading={isLoading} />\r\n                    <TableHeaderWithSort id=\"address.city\" tableId={TableHOCServerExampleId} isLoading={isLoading}>\r\n                        City\r\n                    </TableHeaderWithSort>\r\n                    <TableHeaderWithSort id=\"email\" tableId={TableHOCServerExampleId} isLoading={isLoading}>\r\n                        Email\r\n                    </TableHeaderWithSort>\r\n                    <TableHeaderWithSort\r\n                        id=\"username\"\r\n                        tableId={TableHOCServerExampleId}\r\n                        isLoading={isLoading}\r\n                        isDefault\r\n                    >\r\n                        Username\r\n                    </TableHeaderWithSort>\r\n                    <TableRowHeader isLoading={isLoading}>Date of Birth</TableRowHeader>\r\n                    <TableRowHeader isLoading={isLoading} />\r\n                </tr>\r\n            </thead>\r\n        )}\r\n    </TableHOCServerExampleContext.Consumer>\r\n);\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch) => ({\r\n    fetch: () => dispatch(TableHOCServerActions.fetchData()),\r\n    resetFilter: () => dispatch(filterThrough(TableHOCServerExampleId, '')),\r\n});\r\n\r\nclass TableExampleDisconnected extends React.PureComponent<TableHOCServerProps, TableHOCServerExamplesState> {\r\n    state: TableHOCServerExamplesState = {\r\n        data: null,\r\n        isLoading: true,\r\n    };\r\n\r\n    private ServerTableComposed = _.compose(\r\n        withServerSideProcessing,\r\n        tableWithUrlState,\r\n        tableWithBlankSlate({\r\n            title: 'No data fetched from the server',\r\n            description: 'Try reviewing the specified filters above or clearing all filters.',\r\n            buttons: [\r\n                {\r\n                    name: 'Clear filter',\r\n                    enabled: true,\r\n                    onClick: () => this.props.resetFilter(),\r\n                },\r\n            ],\r\n        }),\r\n        tableWithPredicate(TableHOCExampleUtils.tablePredicates[0]),\r\n        tableWithPredicate(TableHOCExampleUtils.tablePredicates[1]),\r\n        tableWithFilter({\r\n            placeholder: 'Filter all',\r\n            blankSlate: {\r\n                title: 'No results found',\r\n            },\r\n        }),\r\n        tableWithSort(),\r\n        tableWithDatePicker({...(TableHOCExampleUtils.tableDatePickerConfig as any)}),\r\n        tableWithNewPagination({perPageNumbers: [3, 5, 10]}),\r\n        tableWithActions()\r\n    )(TableHOC);\r\n\r\n    private fetch = _.debounce(() => {\r\n        this.setState({...this.state, isLoading: true});\r\n        window.setTimeout(\r\n            () =>\r\n                this.props.fetch().done((data: any) => {\r\n                    this.setState({data, isLoading: false});\r\n                }),\r\n            500\r\n        );\r\n    }, 40);\r\n\r\n    private onUpdate = () => {\r\n        this.fetch();\r\n    };\r\n\r\n    private updateUrl = (query: string) => {\r\n        this.props.history.push({search: query});\r\n    };\r\n\r\n    componentDidMount() {\r\n        this.fetch();\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <Section title=\"Server table with numbered rows\">\r\n                <span className=\"block my2 text-grey-7\">\r\n                    Please note that the backend service doesn't support dates but we still make a request for every\r\n                    change in the date range.\r\n                </span>\r\n                <TableHOCServerExampleContext.Provider\r\n                    value={{isLoading: this.state.isLoading, id: TableHOCServerExampleId}}\r\n                >\r\n                    <this.ServerTableComposed\r\n                        id={TableHOCServerExampleId}\r\n                        className=\"table table-numbered mod-collapsible-rows\"\r\n                        data={this.state.data?.users ?? []}\r\n                        renderBody={TableHOCExampleUtils.generateRows}\r\n                        tableHeader={renderHeader()}\r\n                        onUpdate={this.onUpdate}\r\n                        onUpdateUrl={this.updateUrl}\r\n                        isLoading={this.state.isLoading}\r\n                        loading={{numberOfColumns: 6}}\r\n                    >\r\n                        <LastUpdated time={new Date()} />\r\n                    </this.ServerTableComposed>\r\n                </TableHOCServerExampleContext.Provider>\r\n            </Section>\r\n        );\r\n    }\r\n}\r\n\r\nconst TableHOCServer = connect(undefined, mapDispatchToProps)(withRouter(TableExampleDisconnected));\r\n\r\nconst fetchData = (): IThunkAction => (dispatch: IDispatch, getState: () => IReactVaporTestState) => {\r\n    const compositeState: ITableHOCCompositeState = TableHOCUtils.getCompositeState(\r\n        TableHOCServerExampleId,\r\n        getState()\r\n    );\r\n    const [from, to] = _.map(compositeState.dateLimits, (limit) => limit && limit.toISOString());\r\n    const params: any = {\r\n        _page: compositeState.pageNb + 1,\r\n        _limit: compositeState.perPage,\r\n        _sort: compositeState.sortKey,\r\n        _order: compositeState.sortAscending ? 'asc' : 'desc',\r\n        q: compositeState.filter || undefined,\r\n        from,\r\n        to,\r\n    };\r\n    _.each(compositeState.predicates, (predicate: {id: string; value: string}) => {\r\n        params[predicate.id] = predicate.value;\r\n    });\r\n    return $.get('https://jsonplaceholder.typicode.com/users', params).then((response: any[], status, request) => {\r\n        const count = request.getResponseHeader('x-total-count');\r\n        const users = _.map(response, (user: any) => ({\r\n            city: user.address.city,\r\n            username: user.username,\r\n            email: user.email,\r\n            dateOfBirth: moment()\r\n                .subtract(user.address.city.length, 'years')\r\n                .toDate(), // fake a year of birth\r\n        }));\r\n        dispatch(TableWithPaginationActions.setCount(TableHOCServerExampleId, count as any));\r\n        return {\r\n            count,\r\n            users,\r\n        };\r\n    });\r\n};\r\n\r\nconst TableHOCServerActions = {\r\n    fetchData,\r\n};\r\n"}}]);
//# sourceMappingURL=804.bundle.js.map