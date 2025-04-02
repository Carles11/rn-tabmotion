# CustomAnimatedTabBar

A customizable animated tab bar component for React Native, now with full TypeScript support.

## Installation

```bash
npm install rn-tabmotion
```

## Usage

```tsx
import React from 'react'
import { CustomAnimatedTabBar } from 'rn-tabmotion'

const MyTabBar = ({ state, tabs, openCreateModal }) => {
  return (
    <CustomAnimatedTabBar
      state={state}
      tabs={tabs}
      openCreateModal={openCreateModal}
      tabBarHeight={70} // Optional: Customize the height of the tab bar
      tabBarBorderColor="#E0E0E0" // Optional: Customize the border color
      tabBarShadowColor="#000" // Optional: Customize the shadow color
      tabBarBackgroundColor="#FAFAFA" // Optional: Customize the background color
      tabBarElevation={10} // Optional: Customize the elevation
      tabBarShadowOpacity={0.8} // Optional: Customize the shadow opacity
      tabBarShadowRadius={20} // Optional: Customize the shadow radius
      tabBarMarginTop={-10} // Optional: Customize the margin top
      tabBarBorderTopWidth={2} // Optional: Customize the border top width
      alwaysShowTabBar={true} // Optional: Show the tab bar even when the keyboard is open
    />
  )
}
```

## Components

### `CustomAnimatedTabBar`

#### Props
- **`state`** (`{ index: number }`): The navigation state object. Must include an `index` property.
- **`tabs`** (`Array<any>`): An array of tab configurations. Each tab can have any structure, but it should match the expected usage in your app.
- **`openCreateModal`** (`() => void`): A function to handle the "create" action.
- **`tabBarHeight`** (`number`, default: `60`): The height of the tab bar.
- **`tabBarBorderColor`** (`string`, default: `#F6F6F6`): The border color of the tab bar.
- **`tabBarShadowColor`** (`string`, default: `#696969`): The shadow color of the tab bar.
- **`tabBarBackgroundColor`** (`string`, default: `#fff`): The background color of the tab bar.
- **`tabBarElevation`** (`number`, default: `8`): The elevation of the tab bar.
- **`tabBarShadowOpacity`** (`number`, default: `1`): The opacity of the shadow.
- **`tabBarShadowRadius`** (`number`, default: `24`): The radius of the shadow.
- **`tabBarMarginTop`** (`number`, default: `-12`): The top margin of the tab bar.
- **`tabBarBorderTopWidth`** (`number`, default: `1`): The width of the top border.
- **`alwaysShowTabBar`** (`boolean`, default: `false`): If `true`, the tab bar will always be visible, even when the keyboard is open.

---

### `NavigationDot`

#### Props
- **`width`** (`number`): The width of each tab.
- **`activeTabIndex`** (`number`): The index of the currently active tab.

---

### `TabsHandler`

#### Props
- **`tabs`** (`Array<{ label: string; onPress: () => void }>`): An array of tab configurations. Each tab must include:
  - `label`: A string representing the tab's label.
  - `onPress`: A function to handle the tab press action.
- **`tabWidth`** (`number`): The width of each tab.
- **`openCreateModal`** (`() => void`): A function to handle the "create" action.
- **`activeTabIndex`** (`number`): The index of the currently active tab.

## Example

```tsx
<CustomAnimatedTabBar
  state={{ index: 0 }}
  tabs={[
    { label: 'Home', onPress: () => console.log('Home') },
    { label: 'Search', onPress: () => console.log('Search') },
    { label: 'Profile', onPress: () => console.log('Profile') }
  ]}
  openCreateModal={() => console.log('Create')}
  tabBarHeight={70}
  tabBarBorderColor="#E0E0E0"
  tabBarShadowColor="#000"
  tabBarBackgroundColor="#FAFAFA"
  tabBarElevation={10}
  tabBarShadowOpacity={0.8}
  tabBarShadowRadius={20}
  tabBarMarginTop={-10}
  tabBarBorderTopWidth={2}
  alwaysShowTabBar={true}
/>
```

## License

MIT