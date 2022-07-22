import React from "react"
import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer"
import { Image, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { COLORS, constants, FONTS, icons, SIZES } from "../constants"
import dummyData from "../constants/dummyData"
import CustomDrawerItem from "./CustomDrawerItem"
import { useNavigation } from "@react-navigation/native"

type drawerList = {
    id: number,
    label: string,
    iconName: string
}

const drawerNavList: Array<drawerList> = [{
    id: 1,
    label: "Home",
    iconName: "home"
}, {
    id: 2,
    label: "My Wallet",
    iconName: "wallet"
},
{
    id: 3,
    label: "Notifications",
    iconName: "notification"
},
{
    id: 4,
    label: "My Favourites",
    iconName: "favourite"
}]
const drawerTabList: Array<drawerList> = [{
    id: 1,
    label: "Track Your Order",
    iconName: "location"
}, {
    id: 2,
    label: "Coupons",
    iconName: "coupon"
},
{
    id: 3,
    label: "Settings",
    iconName: "setting"
},
{
    id: 4,
    label: "Invite a Friend",
    iconName: "profile"
},
{
    id: 5,
    label: "Help center",
    iconName: "help"
}
]


const CustomDrawerContent = ({ navigation, progress }: any) => {

    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1, backgroundColor: COLORS.primary }}
        >
            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.radius,
            }}>

                {/*TODO:CLOSE */}
                <View style={{
                    alignItems: "flex-start",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>
                    <TouchableOpacity style={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                        onPress={() => {
                            navigation.closeDrawer();
                            progress.value = 0;
                        }
                        }
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 34,
                                width: 34,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/*TODO:My profile */}
                <TouchableOpacity style={{
                    flexDirection: "row",
                    // backgroundColor: "green",
                    marginTop: SIZES.radius
                }}>

                    <Image source={dummyData.myProfile?.profile_image}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View style={{
                        alignItems: "center",
                        marginLeft: SIZES.radius
                    }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                            {dummyData.myProfile?.name || "no-name"}
                        </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>View Profile</Text>
                    </View>
                </TouchableOpacity>


                {/*TODO:Drawer Items */}
                <View style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}
                >

                    {
                        drawerNavList.map(({ label, iconName, id }) => (<CustomDrawerItem
                            key={id}
                            label={label}
                            icon={icons[iconName as keyof typeof icons]}
                        />))
                    }
                    {/* Divider */}
                    <View style={{
                        height: 1,
                        marginVertical: SIZES.radius,
                        marginLeft: SIZES.radius,
                        backgroundColor: COLORS.lightGray1
                    }} />
                    {
                        drawerTabList.map(({ label, iconName, id }) => (<CustomDrawerItem
                            key={id}
                            label={label}
                            icon={icons[iconName as keyof typeof icons]}
                        />))
                    }

                </View>

                <View>
                    <CustomDrawerItem label="Logout" icon={icons.logout} />

                </View>

            </View >
        </DrawerContentScrollView >
    )
}

export default CustomDrawerContent;