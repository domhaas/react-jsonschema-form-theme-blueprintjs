import React, { Component } from 'react';
import { InputGroup } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';

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