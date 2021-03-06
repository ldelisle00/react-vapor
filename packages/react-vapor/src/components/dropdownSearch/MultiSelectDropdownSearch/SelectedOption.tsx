import * as React from 'react';

import {TooltipPlacement} from '../../../utils/TooltipUtils';
import {Svg} from '../../svg/Svg';
import {Tooltip, ITooltipProps} from '../../tooltip/Tooltip';

export interface ISelectedOptionProps {
    value: string;
    label: React.ReactNode;
    selectedTooltip: ITooltipProps;
    onRemoveClick?: (value: string) => void;
}

export class SelectedOption extends React.PureComponent<ISelectedOptionProps> {
    handleOnRemove = () => {
        this.props.onRemoveClick?.(this.props.value);
    };

    render() {
        const tooltipContent = React.Children.count(this.props.children) > 0 ? this.props.children : this.props.label;
        const tooltipLabel = typeof this.props.label === 'string' ? this.props.label : '';
        const tooltipCustomLabel = this.props.selectedTooltip?.title;
        const tooltipPosition = this.props.selectedTooltip?.placement;
        return (
            <div className="selected-option" key={this.props.value}>
                <Tooltip
                    delayShow={300}
                    {...this.props.selectedTooltip}
                    title={tooltipCustomLabel ?? tooltipLabel}
                    placement={tooltipPosition ?? TooltipPlacement.Top}
                    className="selected-option-value"
                >
                    {tooltipContent}
                </Tooltip>

                <div className="remove-option" onClick={this.handleOnRemove}>
                    <Svg svgName="clear" svgClass="icon fill-medium-blue mod-small" />
                </div>
            </div>
        );
    }
}
