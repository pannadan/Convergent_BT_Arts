import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import React from 'react'


const LocationInfoItem = ({location, navigation}) => {
    //const navigation = useNavigation()
  return (
    <View style={styles.card}> 
        <View style={styles.title}>
            <Text>{location.title}</Text>
        </View>
        <View style={styles.icons}>
            <Button title="Find Groups" onPress={() => navigation.navigate('Groups')} />            
            <FontAwesome name='building' color="green" size={24} />
            <FontAwesome name='camera' color="grey" size={24} />

        </View>
        <View style={styles.locationInfo}>
            <Image source={{ uri: location.image }} style={styles.image} />
            <View style={styles.rightContainer}>
                <Text>This is information about the location!</Text>
                <View style={styles.footer}>
                    <Text>{location.longitude} </Text>
                    <Text>{location.latitude}</Text>
                </View>
            </View>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 20,
        padding: 10,
        left: 10,
        right: 10, 
        borderRadius: 20,

        flexDirection: 'column'
        
    },
    icons: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',

    },
    title: {
        margin: 0,
        textAlign: 'center',
    },
    image: {
        width: 150,
        aspectRatio: 1,
        borderRadius: 20,
        overflow: 'hidden',
    },
    rightContainer: {
        padding: 5,
        flex: 1,

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between', //!!! THIS NOT WORKING
        marginTop: 'auto',
    },
    locationInfo: {
        flexDirection: 'row',
    }
})

export default LocationInfoItem