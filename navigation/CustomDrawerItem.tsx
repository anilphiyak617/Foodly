import { View, Text, TouchableOpacity, Image, NavigatorIOS } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native'


type CustomDrawerContentProps = {
    icon: Image,
    label: string,
}

const CustomDrawerItem = ({ icon, label }: CustomDrawerContentProps) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            height: 40,
            alignItems: "center",
            borderRadius: SIZES.base,
            paddingLeft: SIZES.radius,
            marginBottom: SIZES.base,
            // backgroundColor: "red"
        }}
            onPress={() => navigation.goBack()}
        >
            <Image source={icon}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.white,
                }}
            />
            <Text style={{
                marginLeft: 15,
                color: COLORS.white,
                ...FONTS.h3
            }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CustomDrawerItem