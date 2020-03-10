// const express = require('express');
// const app = express();
// const React = require('react');
// const {renderToString, renderToStaticMarkup} = require('react-dom/server');
//
//
// const Test = require("./Test");
//
// app.get('/', function (req, res) {
//     //renderToString 生成的 HTML 字符串 带有data-react-id 标记
//     //renderToStaticMarkup 同样是生成html 字符串 但是不带额外的标记属性 可以节省字符串的大小
//     //当页面不是渲染一个静态的页面时，最好还是使用 renderToString 方法。
//     const content = renderToString(React.createElement(Test));
//     res.send(content);
// });
//
//
// app.listen(3000, 'localhost', function () {
//     console.log(`服务运行在http://localhost:3000`);
// });
