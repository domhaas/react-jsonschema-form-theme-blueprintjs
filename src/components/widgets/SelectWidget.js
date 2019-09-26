import React, { Component } from 'react';
import { HTMLSelect } from "@blueprintjs/core";

class SelectWidget extends Component {
    render() {
        const { readonly, value, onChange, label } = this.props
        const { enumOptions, enumDisabled, inline } = this.props.options

        /*if (props.schema.widget['ui:translate']) {
            var options = []
            props.options.enumOptions.forEach( (item) => {
                options.push({
                    label: t(props.schema.widget['ui:translate'] + '.' + item.value),//t(translationNamespace + '.fields.' + item.label),
                    value: item.value
                })
            })
        } else {
            var options = enumOptions
        }*/
    
        var options = enumOptions

        return (
            <HTMLSelect value={value} options={options} fill={true} onChange={(e) => onChange(e.target.value)} />
        );
    }
}

export default SelectWidget;