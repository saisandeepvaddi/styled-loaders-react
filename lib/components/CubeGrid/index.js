'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        position: relative;\n        margin: 100px auto;\n        width: ', ';\n        height: ', ';\n    '], ['\n        position: relative;\n        margin: 100px auto;\n        width: ', ';\n        height: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        width: 33%;\n        height: 33%;\n        background-color: ', ';\n        float: left;\n        animation: ', ' 1.3s infinite ease-in-out;\n    '], ['\n        width: 33%;\n        height: 33%;\n        background-color: ', ';\n        float: left;\n        animation: ', ' 1.3s infinite ease-in-out;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['animation-delay: 0.2s;'], ['animation-delay: 0.2s;']),
    _templateObject4 = _taggedTemplateLiteral(['animation-delay: 0.3s;'], ['animation-delay: 0.3s;']),
    _templateObject5 = _taggedTemplateLiteral(['animation-delay: 0.4s;'], ['animation-delay: 0.4s;']),
    _templateObject6 = _taggedTemplateLiteral(['animation-delay: 0.1s;'], ['animation-delay: 0.1s;']),
    _templateObject7 = _taggedTemplateLiteral(['animation-delay: 0s;'], ['animation-delay: 0s;']);

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

var CubeGrid = function CubeGrid(_ref) {
    var color = _ref.color,
        size = _ref.size;

    var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

    var Cube = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.grid);

    var Cube1 = Cube.extend(_templateObject3);
    var Cube2 = Cube.extend(_templateObject4);
    var Cube3 = Cube.extend(_templateObject5);
    var Cube4 = Cube.extend(_templateObject6);
    var Cube5 = Cube.extend(_templateObject3);
    var Cube6 = Cube.extend(_templateObject4);
    var Cube7 = Cube.extend(_templateObject7);
    var Cube8 = Cube.extend(_templateObject6);
    var Cube9 = Cube.extend(_templateObject3);

    return _react2.default.createElement(
        Spinner,
        { size: size },
        _react2.default.createElement(Cube1, { color: color }),
        _react2.default.createElement(Cube2, { color: color }),
        _react2.default.createElement(Cube3, { color: color }),
        _react2.default.createElement(Cube4, { color: color }),
        _react2.default.createElement(Cube5, { color: color }),
        _react2.default.createElement(Cube6, { color: color }),
        _react2.default.createElement(Cube7, { color: color }),
        _react2.default.createElement(Cube8, { color: color }),
        _react2.default.createElement(Cube9, { color: color })
    );
};

exports.default = CubeGrid;


CubeGrid.propTypes = {
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