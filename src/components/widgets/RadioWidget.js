import React, { Component } from 'react';
import { RadioGroup, Radio } from "@blueprintjs/core";

class CheckboxWidget extends Component {
    render() {
        const { readonly, value, onChange, label, options } = this.props
        const { enumOptions, enumDisabled, inline } = this.props.options

        return (
            <RadioGroup
                inline={inline}
                disabled={readonly}
                selectedValue={value}
                onChange={(e) => onChange(e.currentTarget.value)}
                >
                {enumOptions.map((option, i) => {
                    return (
                        <Radio
                            key={i}
                            label={option.label}
                            value={option.value}
                        />
                    )
                })}
            </RadioGroup>
        );
    }
}

export default CheckboxWidget;