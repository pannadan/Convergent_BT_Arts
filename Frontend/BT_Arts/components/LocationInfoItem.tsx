import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const LocationInfoItem = ({location}) => {
  return (
    <View style={styles.card}> 
        <Image  source={{ uri: location.image }} style={styles.image} />
        <View style={styles.rightContainer}>
            <Text>{location.title}</Text>
            <View style={styles.footer}>
                <Text>{location.longitude} </Text>
                <Text>{location.latitude}</Text>
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

        flexDirection: 'row'
        
    },
    title: {

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
    }
})

export default LocationInfoItem