import React, { Component } from 'react';
import { Checkbox } from "@blueprintjs/core";

class CheckboxWidget extends Component {
    render() {
        const { readonly, value, onChange, label } = this.props

        return (
            <Checkbox
                label={label}
                disabled={readonly}
                checked={value ? true : false}
                onClick={() => onChange(!value)} />
        );
    }
}

export default CheckboxWidget;