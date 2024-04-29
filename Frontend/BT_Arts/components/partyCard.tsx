import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'
import { FlipInEasyX } from 'react-native-reanimated'

const PartyCard = ({parties}) => {
  return (
    <View style={styles.card}>
        <Image source={require('../assets/images/UTTower.png')} style={styles.image} />
        <View style={styles.nameandnum}>
            <Text>{parties.group_party_name}</Text>
            <Text>Party Size: {parties.number_of_people}</Text>
        </View>
        <View style={styles.rightbox}>
            <Text>{parties.date_time}</Text>
        </View>
        <Button title="Join" onPress={() => Alert.alert('Congratulations!', 'You have joined Ishaan\'s Party!')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 6,
        borderColor: '#DFC8B0',
        padding: 10
    },
    image: {
        width: 60,
        height: 68,
        borderRadius: 0,
        overflow: 'visible',
    },
    nameandnum: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        // alignItems: 'left',

    },
    rightbox: {
        width: 100,
        alignItems: 'flex-end',
    }
})

export default PartyCard