import React from 'react';
import { COLOURS } from './Database';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

const Web = () => {
    return (
        <>
            <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle={'dark-content'} />
            <View style={{ backgroundColor: COLOURS.white, height: '100%' }}>
                <WebView source={{ uri: 'https://speedoo.co/' }} />
            </View>
        </>
    )
}

export default Web

const styles = StyleSheet.create({})