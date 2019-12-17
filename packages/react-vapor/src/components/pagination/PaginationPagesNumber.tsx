import {FunctionComponent} from 'react';
import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils/ReduxUtils';
import {selectFlatSelect} from '../flatSelect/FlatSelectActions';
import {FlatSelectConnected} from '../flatSelect/FlatSelectConnected';
import {FlatSelectSelectors} from '../flatSelect/FlatSelectSelectors';
import {Svg} from '../svg/Svg';

export interface IPaginationPagesNumberProps {
    id: string;
    pagesNumbers?: number;
    nextLabel?: React.ReactNode;
    previousLabel?: React.ReactNode;
}

export const getPaginationPagesNumbersId = (id: string) => `${id}_PagesNumber`;

const mapStateToProps = (state: IReactVaporState, ownProps: IPaginationPagesNumberProps) => ({
    pagesNumbersSelected: FlatSelectSelectors.getSelectedOptionId(state, {
        id: getPaginationPagesNumbersId(ownProps.id),
    }),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IPaginationPagesNumberProps) => ({
    next: (selectedNumber: number) =>
        dispatch(selectFlatSelect(getPaginationPagesNumbersId(ownProps.id), (selectedNumber + 1)?.toString())),
    previous: (selectedNumber: number) =>
        dispatch(selectFlatSelect(getPaginationPagesNumbersId(ownProps.id), (selectedNumber - 1)?.toString())),
});

export const PaginationPagesNumberDisconnected: FunctionComponent<IPaginationPagesNumberProps &
    Partial<ReturnType<typeof mapStateToProps>> &
    Partial<ReturnType<typeof mapDispatchToProps>>> = ({
    id,
    pagesNumbers = 1,
    pagesNumbersSelected,
    nextLabel = 'Next',
    previousLabel = 'Previous',
    next,
    previous,
}) => {
    const numberSelected: number = parseInt(pagesNumbersSelected, 10);
    const canPrevious = numberSelected > 1;
    const canNext = numberSelected < pagesNumbers;
    return (
        <div className="pagination flex center-align space-between">
            <div
                className={`change-page-link mr1 flex center-align ${!canPrevious && 'disabled'}`}
                onClick={() => canPrevious && previous?.(numberSelected)}
            >
                <Svg svgName="arrow-left-rounded" className="pagination-icon" svgClass="icon icon-small mod-lg" />
                {previousLabel}
            </div>
            <FlatSelectConnected
                id={getPaginationPagesNumbersId(id)}
                options={_.times(pagesNumbers, (nb: number) => ({
                    id: (nb + 1).toString(),
                    option: {content: nb + 1},
                }))}
                defaultSelectedOptionId={pagesNumbersSelected?.toString()}
            />
            <div
                className={`change-page-link ml1 flex center-align ${!canNext && 'disabled'}`}
                onClick={() => canNext && next?.(numberSelected)}
            >
                {nextLabel}
                <Svg svgName="arrow-right-rounded" className="pagination-icon" svgClass="icon icon-small mod-lg" />
            </div>
        </div>
    );
};

export const PaginationPagesNumber = connect(mapStateToProps, mapDispatchToProps)(PaginationPagesNumberDisconnected);
