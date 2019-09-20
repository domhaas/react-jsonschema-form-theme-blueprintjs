react-jsonschema-form-theme-blueprintjs
=====================

[react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form) Theme for the great [Blueprintjs](https://github.com/palantir/blueprint) React UI toolkit.
It is using the [HOC withTheme](https://github.com/mozilla-services/react-jsonschema-form/pull/1226).

This is a work in progress and currently this is really a pre-release with only two widgets. Feel free to contribute.
There's currently no node-package available. Stay tuned.

![](https://i.imgur.com/hnoNHBU.png)

## Build
```bash
git clone git@github.com:domhaas/react-jsonschema-form-theme-blueprintjs.git
npm i
npm run build:lib
```

## Current state
| Widget         | State   |
| -------------- | ------- |
| TextWidget     | working |
| CheckboxWidget | working |
| RadioWidget    | working |
| DateWidget     | working |


## Example
```javascript
import React from 'react';
import { withTheme } from 'react-jsonschema-form';
import BlueprintjsTheme from 'react-jsonschema-form-theme-blueprintjs';
import { Button } from "@blueprintjs/core";
import './App.css';

const ThemedForm = withTheme(BlueprintjsTheme);

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: { type: "string", title: "Title", default: "A new task" },
        done: { type: "boolean", title: "Done?", default: false }
    }
};

const uiSchema = {
    "radio": {
      "ui:widget": "radio",
        "ui:options": {
            "inline": true
        }
    }
};

const onSubmit = (e) => {
    console.log('submit', e.formData)
}

function App() {
    return (
        <ThemedForm schema={schema} uiSchema={uiSchema} onSubmit={onSubmit}>
            <Button type="submit">submit</Button>
        </ThemedForm>
    );
}

export default App;
```
