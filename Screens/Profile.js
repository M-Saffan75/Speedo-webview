import { useState } from 'react';
import { NativeModules, PermissionsAndroid, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLOURS } from './Database';
var DirectSms = NativeModules.DirectSms;

export default App = () => {
    // async function to call the Java native method

    const [mobileNumber , setmobileNumber] = useState('');
    const [bodySmS ,setBodySmS] = useState('subscribe to channel');

    const sendDirectSms = async () => {
        
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.SEND_SMS,
                    {
                        title: 'YourProject App Sms Permission',
                        message:
                            'YourProject App needs access to your inbox ' +
                            'so you can send messages in background.',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    DirectSms.sendDirectSms(mobileNumber , bodySmS);
                } else {
                    alert('SMS permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
    }
        return (
            <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput value={mobileNumber} onChangeText={(mobileNumber) => setmobileNumber(mobileNumber)} placeholder='number' placeholderTextColor={'grey'} keyboardType='numeric' style={{borderWidth:2,borderColor:'#000', marginVertical:10,width:'80%', color:'#000'}} />
                    <TextInput value={bodySmS} onChangeText={(bodySmS) => (setBodySmS(bodySmS))} placeholderTextColor={'grey'} style={{borderWidth:2,borderColor:'#000', marginVertical:10,width:'80%'}} />
                <TouchableOpacity style={{ backgroundColor: COLOURS.black, padding: 10, borderRadius: 10 }} onPress={sendDirectSms}>
                    <Text style={{ color: COLOURS.red }}>send SMS</Text>
                </TouchableOpacity>
            </View>
        );
}
