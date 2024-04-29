import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import React from 'react'


const LocationInfoItem = ({location, navigation}) => {
    //const navigation = useNavigation()


    

    return (
    <View style={styles.card}> 
        <View style={styles.header}>
            <Text style={styles.title}>{location.title}</Text>
            <Text style={styles.locationType}>{location.type}</Text>
        </View>

        <View style={styles.icons}>
            <Pressable onPress={() => navigation.navigate('Groups')} style={styles.button}>
                <Text style={styles.buttonText}>
                    Find Groups
                </Text>
            </Pressable> 
            <View>
                <Image style={styles.stamp} source={{uri: location.stampimg}}/>
            </View>
            
            
            {/* <FontAwesome name='building' color="green" size={24} /> */}
            <View style={styles.cameraButton}>
                <Pressable onPress={() => navigation.navigate('Camera')}>
                    <FontAwesome name='camera' color="grey" size={24} />
                </Pressable>
            </View>
        </View>
        <View style={styles.image}>
            <Image source={{ uri: location.image }} style={styles.image} />
        </View>
        <View style={styles.footer}>
            <Text>
                {location.description}
            </Text>
        </View>
        
        
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f6ECDC',
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10, 
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'column'
    },

    header: {
        alignItems: 'baseline',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    title: {
        marginTop: 15,
        marginRight: 10,
        fontSize: 23,
        fontWeight: 'bold',
        width: 250
    },
    locationType: {
        fontStyle: 'italic',
        marginLeft: 'auto',

    },

    icons: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        width: 130,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#991f1f',
        height: 30,
        marginRight: 20,

    },
    buttonText: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    cameraButton: {
        marginLeft: 'auto',
    },
    stamp: {
        height: 40,
        width: 40,
        opacity: 1,
        overflow: 'visible',
    },

    image: {
        marginVertical: 3,
        marginHorizontal: 10,
        width: null,
        height: 120,
        borderRadius: 20,
        overflow: 'hidden',
        flex: 1,
    },
    
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between', //!!! THIS NOT WORKING
        marginTop: 5,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    
})

export default LocationInfoItem



/*
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
*/
