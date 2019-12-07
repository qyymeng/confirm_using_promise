
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class InputNumber extends PureComponent {

    static propTypes = {
        ref: PropTypes.any,
        value: PropTypes.number,
        defaultValue: PropTypes.number,
        onChange: PropTypes.func,
        name: PropTypes.string,
        placeholder: PropTypes.string,
    };

    
    static defaultProps = {
        style: {}
    };

    constructor(props) {
        super(props);
    
        let value;
        if ('value' in props) {
          value = props.value;
        } else {
          value = props.defaultValue;
        }
        
        this.state = {
          ...this.state,
          inputValue: value,
        };
      }

    onChange = (e) => {
        this.setState({ inputValue: e.value });
    }

    render() {
        return (
            <input 
                ref={this.props.ref} 
                onChange={this.onChange}
                style={this.props.style}
                value={this.state.inputValue}
                defaultValue={this.state.value}
                type="number"
                style={{fontSize:24}}
            />
        )
    }
}