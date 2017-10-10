'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        margin: 100px auto;\n        position: relative;\n        width: ', ';\n        height: ', ';\n    '], ['\n        margin: 100px auto;\n        position: relative;\n        width: ', ';\n        height: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        width: ', ';\n        height: ', ';\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-color: ', ';\n        animation: ', ' 2s infinite ease-in-out;\n        animation-duration: ', ';\n    '], ['\n        width: ', ';\n        height: ', ';\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-color: ', ';\n        animation: ', ' 2s infinite ease-in-out;\n        animation-duration: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['animation-delay: -0.9s;'], ['animation-delay: -0.9s;']);

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

var Cube = function Cube(_ref) {
    var color = _ref.color,
        duration = _ref.duration,
        size = _ref.size,
        cubeSize = _ref.cubeSize;

    var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

    var DefaultCube = _styledComponents2.default.div(_templateObject2, function (props) {
        return props.cubeSize ? props.cubeSize : '15px';
    }, function (props) {
        return props.cubeSize ? props.cubeSize : '15px';
    }, (0, _defaults.getColor)(color), _animations.cube, function (props) {
        return props.duration ? props.duration : '1.8s';
    });

    var StyledCube = DefaultCube.extend(_templateObject3);

    return _react2.default.createElement(
        Spinner,
        { size: size },
        _react2.default.createElement(DefaultCube, {
            color: color,
            cubeSize: cubeSize,
            duration: duration
        }),
        _react2.default.createElement(StyledCube, { color: color, cubeSize: cubeSize, duration: duration })
    );
};

exports.default = Cube;


Cube.propTypes = {
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
    size: _propTypes2.default.string,

    /**
    * Size of the each cube
    * default is 15
    */
    cubeSize: _propTypes2.default.string
};