import Web from './Web';
import Profile from './Profile';
import MapHere from './MapHere';
import { COLOURS } from './Database';
import SendSMS from 'react-native-sms';
import MapIntegration from './MapIntegration';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavigation = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { display: 'none' },
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: COLOURS.blue,
            tabBarInactiveTintColor: COLOURS.grey,

            tabBarStyle: {
                height: 50,
                paddingBottom: 5,
                paddingHorizontal: 7,
                borderRadius: 10,
                // tabBarPosition: 'bottom',

                marginHorizontal: 10,
                marginVertical: 10,
                keyboardHidesTabBar: true,
                backgroundColor: COLOURS.white,
            }

        }}>
            <Tab.Screen name="web" component={Web}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="speedometer" color={focused ? COLOURS.blue : COLOURS.grey} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="ansible" color={focused ? COLOURS.blue : COLOURS.grey} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Service" component={Service}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="history" color={focused ? COLOURS.blue : COLOURS.grey} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="MapIntegration" component={MapIntegration}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="account" color={focused ? COLOURS.blue : COLOURS.grey} size={30} />

                    ),
                }}
            />
        </Tab.Navigator>
    )
}


const Service = () => {

    const [show, setShow] = useState(false);
    const [here, setHere] = useState(false);
    const [wrong, setWrong] = useState(false);


    const sendsms = (props) => {

        props.name = 'filled',
            props.number = '0000 ',
            props.departname = 'combine ',
            props.all = props.name + props.number + props.departname,

            SendSMS.send({
                body: props.all,
                recipients: ['03478583853'],
                successTypes: ['sent', 'queued'],
                allowAndroidSendWithoutReadPermission: false
            }, (completed, cancelled, error) => {
                setShow(completed)
                setHere(cancelled)
                // setWrong(error)
                console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
            });
    }
    return (
        <View style={{ backgroundColor: COLOURS.white, height: '100%', alignItems: 'center', justifyContent: 'center' }} >
            <TouchableOpacity onPress={sendsms} style={{ backgroundColor: COLOURS.black, padding: 10, borderRadius: 10 }}>
                <Text style={{ color: COLOURS.white }}>Service</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})