import React, { Component } from 'react';
import { InputGroup } from "@blueprintjs/core";

class TextWidget extends Component {
    render() {
        const { readonly, value, onChange, label } = this.props

        return (
            <InputGroup
                label={label}
                disabled={readonly}
                defaultValue={value}
                onChange={() => onChange(value)} />
        );
    }
}

export default TextWidget;