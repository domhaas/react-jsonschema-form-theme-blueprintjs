import widgets from './widgets/';
import React, { Component } from 'react'
import Form from "react-jsonschema-form";

export class BlueprintjsTheme extends Component {
    render() {
        const {...restProps} = this.props;
        return (
            <Form {...restProps}/>
        )
    }
}

export default {
    widgets: widgets
}