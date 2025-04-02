import React from 'react';
interface CustomAnimatedTabBarProps {
    state: {
        index: number;
    };
    tabs: Array<any>;
    openCreateModal: () => void;
    tabBarHeight?: number;
    tabBarBorderColor?: string;
    tabBarShadowColor?: string;
    tabBarBackgroundColor?: string;
    tabBarElevation?: number;
    tabBarShadowOpacity?: number;
    tabBarShadowRadius?: number;
    tabBarMarginTop?: number;
    tabBarBorderTopWidth?: number;
    alwaysShowTabBar?: boolean;
}
export declare const CustomAnimatedTabBar: React.FC<CustomAnimatedTabBarProps>;
export {};
