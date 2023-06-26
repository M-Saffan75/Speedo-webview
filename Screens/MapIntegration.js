import MapHere from './MapHere';
import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';

const MapIntegration = () => {

    const [userlocation, setuserLocation] = useState(false);

    useEffect(() => {
        function getUserLocation() {
            requestLocationPermission();
        }
        getUserLocation()
    }, [])

    /*  */
    async function requestLocationPermission() {
        var response = await request(PERMISSIONS.ANDROID_FINE_LOCATION)
        if (response == 'granted') {
            await Geolocation.getCurrentPosition(
                ({coords}) => {
                    setuserLocation(coords)
                },
                (error) => {
                    Alert.alert(error.code, error.message);
                },
                {enableHighAccuracy: true , timeout:15000, maximumAge:10000}
            )
        }
    }
    /*  */
if(!userlocation) 
console.log(userlocation, 'My Current Location');

    return (
        <View style={{ height: '100%' }}>
            <MapHere />
        </View>
    )
}

export default MapIntegration

const styles = StyleSheet.create({
    
})