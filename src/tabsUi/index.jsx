import { useEffect, useMemo, useState } from 'react'

import { Dimensions, Keyboard, View } from 'react-native'

import { NavigationDot } from '../navigationDot'
import { TabsHandler } from '../tabsHandler'

const { width: windowWidth } = Dimensions.get('window')

export const CustomAnimatedTabBar = ({
  state,
  tabs,
  openCreateModal,
  tabBarHeight = 60,
  tabBarBorderColor = '#F6F6F6',
  tabBarShadowColor = '#696969',
  tabBarBackgroundColor = '#fff',
  tabBarElevation = 8,
  tabBarShadowOpacity = 1,
  tabBarShadowRadius = 24,
  tabBarMarginTop = -12,
  tabBarBorderTopWidth = 1,
  alwaysShowTabBar = false // New prop to control visibility when the keyboard is open
}) => {
  const tabWidth = useMemo(() => windowWidth / tabs.length, [tabs.length])

  const [keyboardStatus, setKeyboardStatus] = useState(false)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true)
    })

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  if (keyboardStatus && !alwaysShowTabBar) {
    return null
  }

  return (
    <View
      style={{
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
      }}
    >
      <View style={{ flexDirection: 'column' }}>
        <TabsHandler
          {...{ tabs, tabWidth, openCreateModal }}
          activeTabIndex={state.index}
        />

        <NavigationDot width={tabWidth} activeTabIndex={state.index} />
      </View>
    </View>
  )
}
