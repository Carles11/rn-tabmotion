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
exports.NavigationDot = void 0;
var react_1 = __importStar(require("react"));
var react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
var styles_1 = require("./styles");
var NavigationDot = function (_a) {
    var width = _a.width, activeTabIndex = _a.activeTabIndex;
    var startingPos = (width - 5) / 2;
    var dotWidth = (0, react_native_reanimated_1.useSharedValue)(5);
    var dotHeight = (0, react_native_reanimated_1.useSharedValue)(5);
    var translateX = (0, react_native_reanimated_1.useSharedValue)(startingPos);
    var progressStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () { return ({
        transform: [
            {
                translateX: translateX.value
            }
        ],
        width: (0, react_native_reanimated_1.interpolate)(dotWidth.value, [5, 100, 5], [5, 40, 5]),
        height: dotHeight.value
    }); });
    (0, react_1.useEffect)(function () {
        translateX.value = (0, react_native_reanimated_1.withTiming)(startingPos + activeTabIndex * width, {
            duration: 600
        });
        dotWidth.value = (0, react_native_reanimated_1.withSequence)((0, react_native_reanimated_1.withTiming)(width, { duration: 300 }), (0, react_native_reanimated_1.withTiming)(5, { duration: 300 }));
        dotHeight.value = (0, react_native_reanimated_1.withSequence)((0, react_native_reanimated_1.withTiming)(0, { duration: 300 }), (0, react_native_reanimated_1.withTiming)(5, { duration: 300 }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTabIndex]);
    return (react_1.default.createElement(react_native_reanimated_1.default.View, { style: styles_1.styles.dotContainer },
        react_1.default.createElement(react_native_reanimated_1.default.View, { style: [progressStyle, styles_1.styles.dot] })));
};
exports.NavigationDot = NavigationDot;
//# sourceMappingURL=index.js.map