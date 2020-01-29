(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{1787:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {selectWithFilter, selectWithInfiniteScroll, SelectWithInfiniteScrollProps} from '..';\r\nimport {FilterBoxSelectors} from '../..';\r\nimport {IReactVaporExampleState} from '../../../../docs/Reducers';\r\nimport {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';\r\nimport {withServerSideProcessing} from '../../../hoc';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {Section} from '../../section';\r\nimport {\r\n    SingleSelectWithFilter,\r\n    SingleSelectWithPredicate,\r\n    SingleSelectWithPredicateAndFilter,\r\n} from '../hoc/SelectComponents';\r\nimport {ISingleSelectOwnProps, SingleSelectConnected} from '../SingleSelectConnected';\r\nimport {PhotoItem, PhotoProps, usePhotosAPIMock} from './ServerSideSelectExampleUtils';\r\n\r\nexport const SingleSelectExample: ExampleComponent = () => (\r\n    <Section>\r\n        <SingleSelectConnectedExamples />\r\n        <ServerSideSingleSelectExample id=\"ServerSideSingleSelect\" />\r\n    </Section>\r\n);\r\n\r\nSingleSelectExample.description =\r\n    'A Single Select component allows users to choose a single option from a list or, if relevant, to create and select their own custom option.';\r\n\r\nconst defaultItems: IItemBoxProps[] = [\r\n    {displayValue: 'Test', value: '0'},\r\n    {displayValue: 'Test One', value: '1'},\r\n    {displayValue: 'Disabled', value: 'disabled', disabled: true},\r\n    {displayValue: 'Three', value: '3'},\r\n    {displayValue: 'Four', value: '4'},\r\n    {displayValue: 'Five', value: '5'},\r\n    {displayValue: 'Six', value: '6'},\r\n    {displayValue: 'Seven', value: '7', selectedDisplayValue: '007 Bond, James'},\r\n];\r\n\r\nconst itemsWithAppendedValue = _.map(defaultItems, (item) =>\r\n    _.extend({}, item, {append: {content: () => <span className=\"text-red ml3\">{item.value}</span>}})\r\n);\r\n\r\nconst defaultFlatSelectOptions: IFlatSelectOptionProps[] = [\r\n    {id: UUID.generate(), option: {content: 'All'}, selected: true},\r\n    {id: UUID.generate(), option: {content: 'even'}},\r\n    {id: UUID.generate(), option: {content: 'odd'}},\r\n];\r\n\r\nconst matchPredicate = (predicate: string, item: IItemBoxProps) => {\r\n    const value = parseInt(item.value, 10);\r\n    if (predicate === defaultFlatSelectOptions[0].id) {\r\n        return true;\r\n    } else if (predicate === defaultFlatSelectOptions[1].id) {\r\n        return value % 2 === 0;\r\n    } else if (predicate === defaultFlatSelectOptions[2].id) {\r\n        return value % 2 === 1;\r\n    } else {\r\n        return true;\r\n    }\r\n};\r\n\r\nconst SingleSelectConnectedExamples: React.ComponentType = () => (\r\n    <Section level={2} title=\"Single selects connected to store\">\r\n        <Section level={3} className=\"form-group\" title=\"A single select with some implementation props\">\r\n            <SingleSelectConnected\r\n                id={UUID.generate()}\r\n                items={defaultItems}\r\n                placeholder=\"Select something\"\r\n                canClear\r\n                buttonPrepend={<span>👉 </span>}\r\n            />\r\n        </Section>\r\n        <Section level={3} title=\"A single select with predicates\">\r\n            <SingleSelectWithPredicate\r\n                id={UUID.generate()}\r\n                items={itemsWithAppendedValue}\r\n                options={defaultFlatSelectOptions}\r\n                matchPredicate={(p: string, i: IItemBoxProps) => matchPredicate(p, i)}\r\n            />\r\n        </Section>\r\n        <Section level={3} title=\"A single select with filter\">\r\n            <SingleSelectWithFilter id={UUID.generate()} items={itemsWithAppendedValue} />\r\n        </Section>\r\n        <Section level={3} title=\"A single select with a custom match filter that matches the exact value\">\r\n            <SingleSelectWithFilter\r\n                id={UUID.generate()}\r\n                items={itemsWithAppendedValue}\r\n                matchFilter={(filter: string, item: IItemBoxProps) =>\r\n                    _.isString(item.displayValue) ? item.displayValue.indexOf(filter) !== -1 : false\r\n                }\r\n            />\r\n        </Section>\r\n        <Section level={3} title=\"A single select with a filter, predicates, a lots of values and a footer\">\r\n            <SingleSelectWithPredicateAndFilter\r\n                id={UUID.generate()}\r\n                items={itemsWithAppendedValue}\r\n                options={defaultFlatSelectOptions}\r\n                matchPredicate={(p: string, i: IItemBoxProps) => matchPredicate(p, i)}\r\n                dropClasses=\"drop-this\"\r\n                customValues\r\n                footer={<div className=\"select-footer\">The single select footer</div>}\r\n            />\r\n        </Section>\r\n    </Section>\r\n);\r\n\r\nconst PER_PAGE = 10;\r\n\r\nconst mapStateToProps = (state: IReactVaporExampleState, props: {id: string}) => ({\r\n    filterValue: FilterBoxSelectors.getFilterText(state, props),\r\n});\r\n\r\nconst ServerSideSingleSelectExampleDisconnected: React.FunctionComponent<{id: string} & ReturnType<\r\n    typeof mapStateToProps\r\n>> = ({filterValue, id}) => {\r\n    const [photos, totalEntries, fetchPhotos] = usePhotosAPIMock();\r\n    const [pageNbr, setPage] = React.useState(1);\r\n\r\n    React.useEffect(() => {\r\n        fetchPhotos({_page: 1, _limit: PER_PAGE});\r\n    }, [PER_PAGE]);\r\n\r\n    function fetchNextPage() {\r\n        fetchPhotos({_page: pageNbr + 1, _limit: PER_PAGE, q: filterValue}, false);\r\n        setPage(pageNbr + 1);\r\n    }\r\n\r\n    function applyFilter() {\r\n        fetchPhotos({_page: 1, _limit: PER_PAGE, q: filterValue});\r\n        setPage(1);\r\n    }\r\n\r\n    return (\r\n        <Section level={2} title=\"Server side single select\">\r\n            <Section level={3} title=\"A single select using server-side filtering and pagination with infinite scroll\">\r\n                <ServerSideSingleSelect\r\n                    id={id}\r\n                    items={photos.map(\r\n                        (photo: PhotoProps): IItemBoxProps => ({\r\n                            value: photo.id,\r\n                            displayValue: <PhotoItem {...photo} />,\r\n                        })\r\n                    )}\r\n                    totalEntries={totalEntries}\r\n                    next={fetchNextPage}\r\n                    onUpdate={applyFilter}\r\n                    canClear\r\n                    noFixedWidth\r\n                />\r\n            </Section>\r\n        </Section>\r\n    );\r\n};\r\n\r\nconst ServerSideSingleSelect: React.ComponentType<ISingleSelectOwnProps & SelectWithInfiniteScrollProps> = _.compose(\r\n    withServerSideProcessing,\r\n    selectWithFilter,\r\n    selectWithInfiniteScroll\r\n)(SingleSelectConnected);\r\n\r\nconst ServerSideSingleSelectExample = connect(mapStateToProps)(ServerSideSingleSelectExampleDisconnected);\r\n"}}]);
//# sourceMappingURL=687.bundle.js.map