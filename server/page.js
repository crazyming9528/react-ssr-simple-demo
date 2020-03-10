const React = require("react");
const {renderToString, renderToStaticMarkup} = require('react-dom/server');

const TestApp = require("../app/TestApp");
const ReactDom = require("react-dom");

module.exports = function (props) {

    let content = renderToString(<TestApp initialCount={props.initialCount}/>);

    let propsScript = 'var APP_PROPS = ' + JSON.stringify(props);

    let html = renderToStaticMarkup(
        <html>
        <head>
        </head>
        <body>
        <div id="root" dangerouslySetInnerHTML={
            {
                __html: content
            }
        }></div>
        <script dangerouslySetInnerHTML={{
            __html: propsScript
        }}></script>
        <script src={"assets/entry.generator.js"}></script>
        </body>
        </html>
    )


    return html;

}

