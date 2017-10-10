'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        margin: 100px auto;\n        width: ', ';\n        text-align: center;\n        font-size: 10px;\n        height: ', ';\n    '], ['\n        margin: 100px auto;\n        width: ', ';\n        text-align: center;\n        font-size: 10px;\n        height: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        background-color: ', ';\n        height: 100%;\n        width: ', ';\n        display: inline-block;\n        animation: ', ' 1.2s infinite ease-in-out;\n        animation-duration: ', 's;\n    '], ['\n        background-color: ', ';\n        height: 100%;\n        width: ', ';\n        display: inline-block;\n        animation: ', ' 1.2s infinite ease-in-out;\n        animation-duration: ', 's;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        animation-delay: -', 's;\n    '], ['\n        animation-delay: -', 's;\n    ']);

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

var Stretch = function Stretch(_ref) {
    var color = _ref.color,
        duration = _ref.duration,
        size = _ref.size;

    var durationTime = function durationTime(durationT) {
        return durationT ? parseInt(durationT, 10) : 1.2;
    };
    var Spinner = _styledComponents2.default.div(_templateObject, function (props) {
        return props.size ? props.size : '50px';
    }, (0, _defaults.getSize)(size));

    var DefaultRect = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), function (props) {
        return props.rectWidth ? props.rectWidth : '6px';
    }, _animations.stretch, durationTime(duration));

    var Rect2 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.1);
    var Rect3 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.2);
    var Rect4 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.3);
    var Rect5 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.4);

    return _react2.default.createElement(
        Spinner,
        { size: size },
        _react2.default.createElement(DefaultRect, null),
        _react2.default.createElement(Rect2, null),
        _react2.default.createElement(Rect3, null),
        _react2.default.createElement(Rect4, null),
        _react2.default.createElement(Rect5, null)
    );
};

exports.default = Stretch;


Stretch.propTypes = {
    /**
    * Background of the spinner
    * default is #333
    */
    color: _propTypes2.default.string,

    /**
    * Width of each rectangle
    * default is 6px
    */
    rectWidth: _propTypes2.default.string,

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