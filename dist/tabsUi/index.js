"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAnimatedTabBar = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var navigationDot_1 = require("../navigationDot");
var tabsHandler_1 = require("../tabsHandler");
var windowWidth = react_native_1.Dimensions.get('window').width;
var CustomAnimatedTabBar = function (_a) {
    var state = _a.state, tabs = _a.tabs, openCreateModal = _a.openCreateModal, _b = _a.tabBarHeight, tabBarHeight = _b === void 0 ? 60 : _b, _c = _a.tabBarBorderColor, tabBarBorderColor = _c === void 0 ? '#F6F6F6' : _c, _d = _a.tabBarShadowColor, tabBarShadowColor = _d === void 0 ? '#696969' : _d, _e = _a.tabBarBackgroundColor, tabBarBackgroundColor = _e === void 0 ? '#fff' : _e, _f = _a.tabBarElevation, tabBarElevation = _f === void 0 ? 8 : _f, _g = _a.tabBarShadowOpacity, tabBarShadowOpacity = _g === void 0 ? 1 : _g, _h = _a.tabBarShadowRadius, tabBarShadowRadius = _h === void 0 ? 24 : _h, _j = _a.tabBarMarginTop, tabBarMarginTop = _j === void 0 ? -12 : _j, _k = _a.tabBarBorderTopWidth, tabBarBorderTopWidth = _k === void 0 ? 1 : _k, _l = _a.alwaysShowTabBar, alwaysShowTabBar = _l === void 0 ? false : _l;
    var tabWidth = (0, react_1.useMemo)(function () { return windowWidth / tabs.length; }, [tabs.length]);
    var _m = (0, react_1.useState)(false), keyboardStatus = _m[0], setKeyboardStatus = _m[1];
    (0, react_1.useEffect)(function () {
        var showSubscription = react_native_1.Keyboard.addListener('keyboardDidShow', function () {
            setKeyboardStatus(true);
        });
        var hideSubscription = react_native_1.Keyboard.addListener('keyboardDidHide', function () {
            setKeyboardStatus(false);
        });
        return function () {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    if (keyboardStatus && !alwaysShowTabBar) {
        return null;
    }
    return (react_1.default.createElement(react_native_1.View, { style: {
            width: windowWidth, // Remains fixed
            height: tabBarHeight,
            borderTopWidth: tabBarBorderTopWidth, // Dynamic border top width
            borderColor: tabBarBorderColor,
            shadowColor: tabBarShadowColor,
            elevation: tabBarElevation, // Dynamic elevation
            shadowOpacity: tabBarShadowOpacity, // Dynamic shadow opacity
            shadowRadius: tabBarShadowRadius, // Dynamic shadow radius
            backgroundColor: tabBarBackgroundColor,
            marginTop: tabBarMarginTop // Dynamic margin top
        } },
        react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'column' } },
            react_1.default.createElement(tabsHandler_1.TabsHandler, { tabs: tabs, tabWidth: tabWidth, openCreateModal: openCreateModal, activeTabIndex: state.index }),
            react_1.default.createElement(navigationDot_1.NavigationDot, { width: tabWidth, activeTabIndex: state.index }))));
};
exports.CustomAnimatedTabBar = CustomAnimatedTabBar;
//# sourceMappingURL=index.js.map