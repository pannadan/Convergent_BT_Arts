import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import parties from '@/assets/data/groups.json';
import PartyCard from '@/components/partyCard';
import { FlatList } from 'react-native';

export default function groups() {
  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>this is the groups screen</Text>
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
    }
})