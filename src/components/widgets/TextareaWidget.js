import React, { Component } from 'react';
import { TextArea } from "@blueprintjs/core";

class TextareaWidget extends Component {
    render() {
        const { readonly, value, onChange, label } = this.props

        return (
            <TextArea
                label={label}
                disabled={readonly}
                defaultValue={value}
                fill={true}
                onChange={(e) => onChange(e.target.value)} />
        );
    }
}

export default TextareaWidget;