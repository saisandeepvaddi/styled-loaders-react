'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        margin: 100px auto;\n        position: relative;\n        width: ', ';\n        height: ', ';\n        text-align: center;\n        animation: ', ' 2s infinite ease-in-out;\n        animation-duration: ', ';\n    '], ['\n        margin: 100px auto;\n        position: relative;\n        width: ', ';\n        height: ', ';\n        text-align: center;\n        animation: ', ' 2s infinite ease-in-out;\n        animation-duration: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        width: 60%;\n        height: 60%;\n        display: inline-block;\n        position: absolute;\n        top: 0;\n        border-radius: 100%;\n        background-color: ', ';\n        animation: ', ' 2s infinite ease-in-out;\n        animation-duration: ', ';\n    '], ['\n        width: 60%;\n        height: 60%;\n        display: inline-block;\n        position: absolute;\n        top: 0;\n        border-radius: 100%;\n        background-color: ', ';\n        animation: ', ' 2s infinite ease-in-out;\n        animation-duration: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        top: auto;\n        bottom: 0;\n        animation-delay: -1s;\n    '], ['\n        top: auto;\n        bottom: 0;\n        animation-delay: -1s;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _defaults = require('../../utils/defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RotateScale = function RotateScale(_ref) {
    var color = _ref.color,
        duration = _ref.duration,
        size = _ref.size;

    var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size), _animations.rotate, function (props) {
        return props.duration ? props.duration : '2s';
    });

    var DefaultCube = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.bounce, function (props) {
        return props.duration ? props.duration : '2s';
    });

    var Cube = DefaultCube.extend(_templateObject3);

    return _react2.default.createElement(
        Spinner,
        { size: size, duration: duration },
        _react2.default.createElement(DefaultCube, { color: color, duration: duration }),
        _react2.default.createElement(Cube, { color: color, duration: duration })
    );
};

exports.default = RotateScale;


RotateScale.propTypes = {
    /**
    * Background of the spinner
    * default is #333
    */
    color: _propTypes2.default.string,

    /**
    * Animation duration
    * default is 1.2s
    */
    duration: _propTypes2.default.string,

    /**
    * Size of the spinner
    * default is 40px
    */
    size: _propTypes2.default.string
};