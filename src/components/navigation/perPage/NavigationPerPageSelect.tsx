import * as React from 'react';

export interface INavigationPerPageSelectOwnProps extends React.ClassAttributes<NavigationPerPageSelect> {
  perPageNb: number;
  selected: boolean;
  onPerPageClick: (perPageNb: number) => void;
}

export interface INavigationPerPageSelectProps extends INavigationPerPageSelectOwnProps { }

export class NavigationPerPageSelect extends React.Component<INavigationPerPageSelectProps, any> {

  render() {
    let selectClasses = 'flat-select-option' + (this.props.selected ? '' : ' selectable');
    let spanClasses = 'enabled' + (this.props.selected ? ' selected-value state-selected' : '');

    return (
      <a className={selectClasses} onClick={() => this.props.onPerPageClick(this.props.perPageNb)}>
        <span className={spanClasses}>{this.props.perPageNb}</span>
      </a>
    );
  }
}
