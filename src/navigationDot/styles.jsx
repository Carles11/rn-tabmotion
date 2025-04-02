import { THEME } from '@shared/config'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  dotContainer: {
    height: 10,
    marginBottom: 0,
    backgroundColor: THEME.colors.transparent
  },
  dot: {
    marginTop: -3,
    borderRadius: 2.5,
    backgroundColor: THEME.colors.accentColor
  }
})
