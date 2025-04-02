import React, { useEffect } from 'react'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from 'react-native-reanimated'

import styles from './styles'

interface NavigationDotProps {
  width: number
  activeTabIndex: number
}

export const NavigationDot: React.FC<NavigationDotProps> = ({ width, activeTabIndex }) => {
  const startingPos = (width - 5) / 2

  const dotWidth = useSharedValue(5)
  const dotHeight = useSharedValue(5)
  const translateX = useSharedValue(startingPos)

  const progressStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value
      }
    ],
    width: interpolate(dotWidth.value, [5, 100, 5], [5, 40, 5]),
    height: dotHeight.value
  }))

  useEffect(() => {
    translateX.value = withTiming(startingPos + activeTabIndex * width, {
      duration: 600
    })

    dotWidth.value = withSequence(
      withTiming(width, { duration: 300 }),
      withTiming(5, { duration: 300 })
    )

    dotHeight.value = withSequence(
      withTiming(0, { duration: 300 }),
      withTiming(5, { duration: 300 })
    )
  }, [activeTabIndex])

  return (
    <Animated.View style={styles.dotContainer}>
      <Animated.View style={[progressStyle, styles.dot]} />
    </Animated.View>
  )
}
