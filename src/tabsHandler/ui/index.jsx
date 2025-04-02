import { View } from 'react-native'

import { CommonActions, useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { THEME } from '@shared/config'
import { getBottomTabIcon } from '@shared/lib/getBottomTabIcons'
import { AddButton } from '@shared/ui/buttons'
import { AppText } from '@shared/ui/text'

import { styles } from './styles'

export const TabsHandler = ({
  tabs,
  tabWidth,
  activeTabIndex,
  openCreateModal
}) => {
  const navigation = useNavigation()

  return (
    <View style={{ flexDirection: 'row', height: 50 }}>
      {tabs?.map((tab, key) => {
        const onPress = () => {
          if (tab?.name === 'Erstellen') {
            openCreateModal()
          } else {
            // navigation.navigate(tab?.name, { screen: tab?.mainTab })
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: tab?.name, params: { screen: tab?.mainTab } }]
              })
            )
          }
        }

        if (tab?.name === 'Erstellen') {
          return (
            <View
              key="add-button"
              style={{
                width: tabWidth,
                top: -9,
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignSelf: 'center'
              }}
            >
              <AddButton onPress={onPress} />
              <AppText style={{ fontSize: THEME.fonts.tinySizeText }}>
                Erstellen
              </AppText>
            </View>
          )
        }

        return (
          <View
            {...{ key }}
            style={{
              width: tabWidth,
              height: 60,
              marginTop: 0,
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignSelf: 'center'
            }}
          >
            <BorderlessButton
              onPress={onPress}
              style={styles.button}
              rippleColor="rgba(130, 183, 216, 0.7)"
              rippleRadius={30}
            >
              <View style={{ height: 20 }}>
                {getBottomTabIcon(
                  tab?.name,
                  tabs[activeTabIndex]?.name
                  // THEME.colors.accentColor,
                  // THEME.colors.middleGray
                )}
              </View>
              <AppText style={{ fontSize: THEME.fonts.tinySizeText }}>
                {tab?.label}
              </AppText>
            </BorderlessButton>
          </View>
        )
      })}
    </View>
  )
}
