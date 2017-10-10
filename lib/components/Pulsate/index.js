'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        position: relative;\n        margin: 100px auto;\n        width: ', ';\n        height: ', ';\n    '], ['\n        position: relative;\n        margin: 100px auto;\n        width: ', ';\n        height: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background-color: ', ';\n        opacity: 0.6;\n        position: absolute;\n        top: 0;\n        left: 0;\n        animation: ', ' 2s infinite ease-in-out;\n        animation-duration: ', ';\n    '], ['\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background-color: ', ';\n        opacity: 0.6;\n        position: absolute;\n        top: 0;\n        left: 0;\n        animation: ', ' 2s infinite ease-in-out;\n        animation-duration: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['animation-delay: -1s;'], ['animation-delay: -1s;']);

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

var Pulsate = function Pulsate(_ref) {
    var color = _ref.color,
        duration = _ref.duration,
        size = _ref.size;

    var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

    var DefaultBounce = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.pulsate, function (props) {
        return props.duration ? props.duration : '2.0s';
    });

    var Bounce2 = DefaultBounce.extend(_templateObject3);

    return _react2.default.createElement(
        Spinner,
        { size: size },
        _react2.default.createElement(DefaultBounce, { color: color, duration: duration }),
        _react2.default.createElement(Bounce2, { color: color, duration: duration })
    );
};

exports.default = Pulsate;


Pulsate.propTypes = {
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