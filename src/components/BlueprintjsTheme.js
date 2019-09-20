import React, { Component } from 'react'
import Form from "react-jsonschema-form";
import widgets from './widgets/';
import fields from './fields/';
import '@blueprintjs/core/lib/css/blueprint.css';

export class BlueprintjsTheme extends Component {
    render() {
        const {...restProps} = this.props;
        return (
            <Form {...restProps}/>
        )
    }
}

export default {
    widgets: widgets,
    fields: fields
}