import { Image, LayoutAnimation, StyleSheet, Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import { COLOURS } from './Database'

export default class MapHere extends Component {

    state = {
        coordinate: {
            latitude: 37.78825,
            longitude: -122.4324,
        },
        marginBottom:1
    }

    render() {
        let { latitude, longitude } = this.state.coordinate
        console.log(this.state.coordinate, 'map Coords')
        return (
            <View style={styles.map}>

                <View style={{position:'absolute',marginTop:-37, margiLeft:-11, zIndex:1 , top:"50%" , left:'50%'}}>
                    <Image source={require('../images/location-pin.png')} style={{height:50 , width:50,}} resizeMode="contain"/>
                </View>
                <MapView style={{ height: '100%', marginBottom: 10 }} 
                    ref={map => this.map = map}
                    styles = {{marginBottom: this.state.marginBottom}}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    onRegionChangeComplete={(region) => this.setState({
                        coordinate: region
                    })}
                    onMapReady = {() => {this.setState({marginBottom:0})}}
                >
                    {/* <Marker
                        coordinate={{
                            latitude,
                            longitude,
                        }}
                        title="Map">
                    </Marker> */}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map : {
        ...StyleSheet.absoluteFillObject
    },  
})