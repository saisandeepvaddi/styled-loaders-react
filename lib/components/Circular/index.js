'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        position: relative;\n        margin: 100px auto;\n        width: ', ';\n        height: ', ';\n    '], ['\n        position: relative;\n        margin: 100px auto;\n        width: ', ';\n        height: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n\n        &::before {\n            content: \'\';\n            display: block;\n            margin: 0 auto;\n            width: 15%;\n            height: 15%;\n            background-color: ', ';\n            border-radius: 100%;\n            animation: ', ' 1.2s infinite ease-in-out both;\n        }\n    '], ['\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n\n        &::before {\n            content: \'\';\n            display: block;\n            margin: 0 auto;\n            width: 15%;\n            height: 15%;\n            background-color: ', ';\n            border-radius: 100%;\n            animation: ', ' 1.2s infinite ease-in-out both;\n        }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        transform: rotate(30deg);\n        &::before {\n            animation-delay: -1.1s;\n        }\n    '], ['\n        transform: rotate(30deg);\n        &::before {\n            animation-delay: -1.1s;\n        }\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        transform: rotate(60deg);\n        &::before {\n            animation-delay: -1s;\n        }\n    '], ['\n        transform: rotate(60deg);\n        &::before {\n            animation-delay: -1s;\n        }\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        transform: rotate(90deg);\n        &::before {\n            animation-delay: -0.9s;\n        }\n    '], ['\n        transform: rotate(90deg);\n        &::before {\n            animation-delay: -0.9s;\n        }\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        transform: rotate(120deg);\n        &::before {\n            animation-delay: -0.8s;\n        }\n    '], ['\n        transform: rotate(120deg);\n        &::before {\n            animation-delay: -0.8s;\n        }\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n        transform: rotate(150deg);\n        &::before {\n            animation-delay: -0.7s;\n        }\n    '], ['\n        transform: rotate(150deg);\n        &::before {\n            animation-delay: -0.7s;\n        }\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n        transform: rotate(180deg);\n        &::before {\n            animation-delay: -0.6s;\n        }\n    '], ['\n        transform: rotate(180deg);\n        &::before {\n            animation-delay: -0.6s;\n        }\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n        transform: rotate(210deg);\n        &::before {\n            animation-delay: -0.5s;\n        }\n    '], ['\n        transform: rotate(210deg);\n        &::before {\n            animation-delay: -0.5s;\n        }\n    ']),
    _templateObject10 = _taggedTemplateLiteral(['\n        transform: rotate(240deg);\n        &::before {\n            animation-delay: -0.4s;\n        }\n    '], ['\n        transform: rotate(240deg);\n        &::before {\n            animation-delay: -0.4s;\n        }\n    ']),
    _templateObject11 = _taggedTemplateLiteral(['\n        transform: rotate(270deg);\n        &::before {\n            animation-delay: -0.3s;\n        }\n    '], ['\n        transform: rotate(270deg);\n        &::before {\n            animation-delay: -0.3s;\n        }\n    ']),
    _templateObject12 = _taggedTemplateLiteral(['\n        transform: rotate(300deg);\n        &::before {\n            animation-delay: -0.2s;\n        }\n    '], ['\n        transform: rotate(300deg);\n        &::before {\n            animation-delay: -0.2s;\n        }\n    ']),
    _templateObject13 = _taggedTemplateLiteral(['\n        transform: rotate(330deg);\n        &::before {\n            animation-delay: -0.1s;\n        }\n    '], ['\n        transform: rotate(330deg);\n        &::before {\n            animation-delay: -0.1s;\n        }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils//defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Circular = function Circular(_ref) {
    var color = _ref.color,
        size = _ref.size;

    var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

    var Circle = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.circular);

    var Circle2 = Circle.extend(_templateObject3);
    var Circle3 = Circle.extend(_templateObject4);
    var Circle4 = Circle.extend(_templateObject5);
    var Circle5 = Circle.extend(_templateObject6);
    var Circle6 = Circle.extend(_templateObject7);
    var Circle7 = Circle.extend(_templateObject8);
    var Circle8 = Circle.extend(_templateObject9);
    var Circle9 = Circle.extend(_templateObject10);
    var Circle10 = Circle.extend(_templateObject11);
    var Circle11 = Circle.extend(_templateObject12);
    var Circle12 = Circle.extend(_templateObject13);

    return _react2.default.createElement(
        Spinner,
        { size: size },
        _react2.default.createElement(Circle, { color: color }),
        _react2.default.createElement(Circle2, { color: color }),
        _react2.default.createElement(Circle3, { color: color }),
        _react2.default.createElement(Circle4, { color: color }),
        _react2.default.createElement(Circle5, { color: color }),
        _react2.default.createElement(Circle6, { color: color }),
        _react2.default.createElement(Circle7, { color: color }),
        _react2.default.createElement(Circle8, { color: color }),
        _react2.default.createElement(Circle9, { color: color }),
        _react2.default.createElement(Circle10, { color: color }),
        _react2.default.createElement(Circle11, { color: color }),
        _react2.default.createElement(Circle12, { color: color })
    );
};

exports.default = Circular;


Circular.propTypes = {
    /**
    * Background of the spinner
    * default is #333
    */
    color: _propTypes2.default.string,

    /**
    * Size of the spinner
    * default is 40px
    */
    size: _propTypes2.default.string
};