import * as React from 'react';
import { IInputBaseProps } from '../input/InputBase';
import * as classNames from 'classnames';

export interface IRadioProps extends IInputBaseProps {
  id: string;
  name?: string;
  label: string;
  classes?: string[];
  onChange?: (value: string) => void;
}

export class Radio extends React.Component<IRadioProps, any> {
  handleChange() {
    if (this.props.onChange) {
      this.props.onChange(this.props.value);
    }
  }

  render() {
    const classes: string = classNames('radio-option', this.props.classes);
    return (
      <div className={classes}>
        <input id={this.props.id}
          name={this.props.name}
          type='radio'
          onChange={() => this.handleChange()}
          checked={!!this.props.checked}
          disabled={!!this.props.disabled} />
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}
