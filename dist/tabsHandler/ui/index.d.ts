import React from 'react';
interface TabsHandlerProps {
    tabs: Array<{
        label: string;
        onPress: () => void;
    }>;
    tabWidth: number;
    openCreateModal: () => void;
    activeTabIndex: number;
}
export declare const TabsHandler: React.FC<TabsHandlerProps>;
export {};
