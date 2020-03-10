const React = require("react"),
    ReactDOM = require('react-dom'),
    TestApp = require("./TestApp");


const APP_PROPS = window.APP_PROPS || {};


ReactDOM.render(
    <TestApp initialCount={APP_PROPS.initialCount}/>,
    document.getElementById('root')
);

