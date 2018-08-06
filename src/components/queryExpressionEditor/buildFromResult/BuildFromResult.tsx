import * as React from 'react';
import {ISearchBarStateProps, SearchBar} from '../../searchBar/SearchBar';
import {ExpressionParser, IFieldExpression} from '../expressionParser/ExpressionParser';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IResult} from '../responseParser/ResponseParser';
import {ResultList} from '../resultList/ResultList';

export interface IBuildFromResultProps {
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
}

export interface IBuildFromResultState extends ISearchBarStateProps {
    results: IResult[];
}

export enum FieldType {
    OBJECT = 'objecttype',
    FILE = 'filetype',
    CONNECTOR = 'connectortype',
    SOURCE = 'sourcetype',
}

// TODO : @source field value is not well parsed spaces should be removed
export class BuildFromResult extends React.Component<IBuildFromResultProps, IBuildFromResultState> {
    private expressionParser: ExpressionParser;

    constructor(props: IBuildFromResultProps) {
        super(props);
        this.state = {results: []};
        this.expressionParser = new ExpressionParser();
    }

    async componentDidMount() {
        const allResults = await this.props.queryTrigger.getAllResults();
        this.setState({results: allResults});
    }

    private onClick(result: IResult) {
        const parsedFieldExpression: string = this.getParsedFieldExpression(result);
        this.props.updateQueryExpression(parsedFieldExpression);
    }

    private getParsedFieldExpression(result: IResult) {
        const fieldExpression = this.getFieldExpression(result);
        if (!fieldExpression) {
            return null;
        }
        return this.expressionParser.parseFieldExpression(fieldExpression);
    }

    // TODO ; better logic?
    private getFieldExpression(result: IResult): IFieldExpression {
        if (!result) {
            return null;
        }

        if (result.objectType) {
            return {
                fieldType: FieldType.OBJECT,
                value: result.objectType,
            };
        } else if (result.fileType) {
            return {
                fieldType: FieldType.FILE,
                value: result.fileType,
            };
        } else if (result.connectorType) {
            return {
                fieldType: FieldType.CONNECTOR,
                value: result.connectorType,
            };
        } else if (result.source) {
            return {
                fieldType: FieldType.SOURCE,
                value: result.source,
            };
        } else {
            return null;
        }
    }

    private async onSearch(searchBarText: string) {
        this.setState({searching: true});
        await this.updateResults(searchBarText);
        this.setState({searching: false});
    }

    private async updateResults(searchBarText: string) {
        const results = await this.props.queryTrigger.getResultsWithBasicExpression(searchBarText);
        this.setState({results: results});
    }

    // TODO remove {} dans onSearch?
    render() {
        return (
            <div>
                <SearchBar
                    id='search-mode-search-bar'
                    placeholder='Search'
                    value={this.state.value}
                    searching={this.state.searching}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.setState({value: event.target.value})}
                    onSearch={(searchBarText: string) => {this.onSearch(searchBarText);}}
                />
                <ResultList results={this.state.results} onClick={(result: IResult) => this.onClick(result)} />
            </div>
        );
    }
}
