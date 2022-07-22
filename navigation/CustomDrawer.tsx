import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { MainLayout } from '../screens';
import { COLORS } from '../constants';
import CustomDrawerContent from './CustomDrawerContent'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {

  const progress = useSharedValue(0);

  const reactAnimatedStyle = useAnimatedStyle(() => {

    console.log(progress.value);
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 26])
    return {
      transform: [{ scale: withTiming(scale, { duration: 800 },) },],
      borderRadius: withTiming(borderRadius, { duration: 800 })
    }
  })
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.primary,
    }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "slide",
          drawerStyle: styles.drawerStyle,
          overlayColor: "transparent",
          sceneContainerStyle: {
            backgroundColor: "transparent"
          }
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            console.log(props)
            // progress.value = props.state;
          }, 0)
          return (<CustomDrawerContent {...props} progress={progress} />)
        }
        }
      >

        <Drawer.Screen name="MainLayout" options={{ headerShown: false }}>
          {props => <MainLayout {...props} drawerAnimatedStyle={reactAnimatedStyle}
          />}
        </Drawer.Screen>
        {/* <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </View >
  )
}


const styles = StyleSheet.create(
  {
    drawerStyle: {
      flex: 1,
      width: '65%',
      paddingRight: 20,
      backgroundColor: "transparent"
    }
  })
export default CustomDrawer

// **--- How the Animations are actually played on the screen

//** 1. Computations by the JS Thread and animations by the Native OS
// a. Compute
// b. Serialize
// c. Transfer data via the Javascript Bridge to Native OS
// d. Deserialize
// e. Run the Frame

//** 2. Computations  and animations by the Native OS
// a. Before animation serialize the enitire animation data
// b. Native OS deserializes it and Run the Animation
// c. No more data transfer on the bridge after each frame computation
// d. JS thread is free and can do other stuffs like UI responses
// e. No lag and Smoooth animations

