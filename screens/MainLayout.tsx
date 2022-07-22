import React, { useEffect } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLORS } from '../constants';

const SIZE = 200;


const MainLayout = ({ drawerAnimatedStyle }: any) => {

    return (
        <Animated.View
            style={[{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.white,
            }, drawerAnimatedStyle]}
        >
            {/* <Animated.View style={[{ height: SIZE, width: SIZE, backgroundColor: "blue" }, reactAnimatedStyle]}> */}
            {/* </Animated.View> */}

            <Text>MainLayout Test</Text>
        </Animated.View>
    )
}

export default MainLayout;