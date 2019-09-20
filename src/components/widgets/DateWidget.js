import React, { Component } from 'react';
import { DateInput } from "@blueprintjs/datetime";
import { Position } from "@blueprintjs/core";
import moment from "moment-timezone";
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';

class DateWidget extends Component {
    render() {
        const { readonly, required, value, onChange, label } = this.props

        var defaultValue
        if (value) {
            defaultValue = new Date(value)
        }

        return (
            <DateInput
                disabled={readonly}
                parseDate={str => new Date(str)}
                defaultValue={defaultValue}
                formatDate={date => date.toLocaleDateString()}
                onChange={(val) => onChange(moment(val).format('YYYY/MM/DD'))}
                popoverProps={{ position: Position.BOTTOM }}
                reverseMonthAndYearMenus={true} />
        );
    }
}

export default DateWidget;