import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

// Define the type for the props
interface TabsHandlerProps {
  tabs: Array<{ label: string; onPress: () => void }> // Array of tab configurations
  tabWidth: number // Width of each tab
  openCreateModal: () => void // Function to handle the "create" action
  activeTabIndex: number // Index of the currently active tab
}

export const TabsHandler: React.FC<TabsHandlerProps> = ({
  tabs,
  tabWidth,
  openCreateModal,
  activeTabIndex
}) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            { width: tabWidth },
            activeTabIndex === index && styles.activeTab
          ]}
          onPress={tab.onPress}
        >
          <Text style={styles.tabLabel}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={[styles.tab, { width: tabWidth }]} onPress={openCreateModal}>
        <Text style={styles.tabLabel}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
})
