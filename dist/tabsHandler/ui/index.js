"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsHandler = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var TabsHandler = function (_a) {
    var tabs = _a.tabs, tabWidth = _a.tabWidth, openCreateModal = _a.openCreateModal, activeTabIndex = _a.activeTabIndex;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        tabs.map(function (tab, index) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, style: [
                styles.tab,
                { width: tabWidth },
                activeTabIndex === index && styles.activeTab
            ], onPress: tab.onPress },
            react_1.default.createElement(react_native_1.Text, { style: styles.tabLabel }, tab.label))); }),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.tab, { width: tabWidth }], onPress: openCreateModal },
            react_1.default.createElement(react_native_1.Text, { style: styles.tabLabel }, "+"))));
};
exports.TabsHandler = TabsHandler;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#000'
    },
    tabLabel: {
        fontSize: 16,
        color: '#000'
    }
});
//# sourceMappingURL=index.js.map