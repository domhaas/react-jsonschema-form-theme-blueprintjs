react-jsonschema-form-theme-blueprintjs
=====================

[react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form) Theme for the great [Blueprintjs](https://github.com/palantir/blueprint) React UI toolkit.
It is using the [HOC withTheme](https://github.com/mozilla-services/react-jsonschema-form/pull/1226).

This is a work in progress. I'm currently implementing widgets. Feel free to contribute.
There's currently no node-package available. Stay tuned.

## Build
```bash
git clone git@github.com:domhaas/react-jsonschema-form-theme-blueprintjs.git
npm i
npm run build:lib
```

## Example
```javascript
import React from 'react';
import { withTheme } from 'react-jsonschema-form';
import BlueprintjsTheme from 'react-jsonschema-form-theme-blueprintjs';
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

const onSubmit = (e) => {
    console.log('submit', e.formData)
}

function App() {
    return (
        <ThemedForm schema={schema} onSubmit={onSubmit} />
    );
}

export default App;
```