import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {Section} from '../../section/Section';
import {TableHOC} from '../TableHOC';
import {tableWithBlankSlate} from '../TableWithBlankSlate';
import {tableWithFilter} from '../TableWithFilter';
import {generateDataWithFacker, generateTableRow} from './TableHOCExamples';

export const TableHocLoadingExamples: ExampleComponent = () => (
    <Section>
        <TableLoadingExamples />
    </Section>
);
TableHocLoadingExamples.title = 'TableHOC loading';

// start-print
const exampleData = generateDataWithFacker(10);

const mapStateToProps = () => ({
    data: exampleData,
});

const TableLoadingExampleDisconnected: React.FunctionComponent<{data: any}> = ({data}) => {
    const tableId = 'TableLoadingExamples';
    return (
        <Section>
            <div>
                <TableLoadingComposed
                    id={tableId}
                    className="table"
                    data={data}
                    renderBody={generateTableRow}
                    isLoading
                />
            </div>
        </Section>
    );
};
const TableLoadingExamples = connect(mapStateToProps)(TableLoadingExampleDisconnected);

const TableLoadingComposed = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter({
        matchFilter: (filter: string, data: any) => data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    }),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'})
)(TableHOC);
