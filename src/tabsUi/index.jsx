import { useEffect, useMemo, useState } from 'react'

import { Dimensions, Keyboard, View } from 'react-native'

import { THEME } from '@shared/config'

import { NavigationDot } from '../navigationDot'
import { TabsHandler } from '../tabsHandler'

const { width: windowWidth } = Dimensions.get('window')

export const CustomAnimatedTabBar = ({ state, tabs, openCreateModal }) => {
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

  if (keyboardStatus) {
    return null
  }

  // fix for index issue because we have fixed screens num, but only 4 tabs
  let indexFix = state.index

  // when we open photos comments screen, we need to fix index on the "Home" tab
  if (state.index <= 1) {
    indexFix = 0
  } else if (state.index === 2 || (state.index >= 4 && state.index <= 6)) {
    indexFix = 1
  } else if (state.index === 7) {
    indexFix = 2
  } else {
    indexFix = -1
  }

  return (
    <View
      style={{
        width: windowWidth,
        height: THEME.style.bottomTabMenuHeight,
        borderTopWidth: 1,
        borderColor: THEME.colors.lightGray,
        shadowColor: THEME.colors.darkGray,
        elevation: 8,
        shadowOpacity: 1, // Adjust opacity to control the visibility of the shadow
        shadowRadius: 24, // Adjust radius for a more blurred effect,
        backgroundColor: THEME.colors.white,
        marginTop: -12
      }}
    >
      <View style={{ flexDirection: 'column' }}>
        <TabsHandler
          {...{ tabs, tabWidth, openCreateModal }}
          activeTabIndex={indexFix}
        />

        <NavigationDot width={tabWidth} activeTabIndex={indexFix} />
      </View>
    </View>
  )
}
