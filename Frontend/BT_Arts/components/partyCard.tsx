import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FlipInEasyX } from 'react-native-reanimated'

const PartyCard = ({parties}) => {
  return (
    <View style={styles.card}>
        <Image source={{ uri: parties.profile_icon }} style={styles.image} />
        <View style={styles.nameandnum}>
            <Text>{parties.group_party_name}</Text>
            <Text>Party Size: {parties.number_of_people}</Text>
        </View>
        <View style={styles.rightbox}>
            <Text>{parties.date_time}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        overflow: 'hidden',
    },
    nameandnum: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        //alignItems: 'center',

    },
    rightbox: {

    }
})

export default PartyCard