import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import parties from '@/assets/data/groups.json';
import PartyCard from '@/components/partyCard';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export default function Groups() {
  return (
    <View style={styles.container}>
        
        <FlatList 
            style={styles.partyList}
            data={parties} 
            renderItem={({item}) => 
                <View style={styles.partyList}>
                    <PartyCard parties={item}/>
                </View>
            }
        />

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6ECDC',
        flex: 1,
        flexDirection: 'column',
    },
    partyList: {
        marginVertical: 10,
        marginHorizontal: 10,
        flex: 1,
    },
    title: {
        justifyContent: 'center',
        margin: 20,
    },
    image: {
        height: 30,
        width: 30
    }
})