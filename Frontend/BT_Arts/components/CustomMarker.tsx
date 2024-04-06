import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps';
import locations from '@/assets/data/locations.json';

const CustomMarker = ({ location, onPress }) => {
  return (
    <Marker
        onPress={onPress}
        coordinate={{ latitude: location.latitude, 
        longitude: location.longitude
        }}
        >
        <View
            style={{
            backgroundColor: 'brown',
            padding: 5,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 20,
            }}
        >
            <Text>
            {location.title}
            </Text>
        </View>

    </Marker>
  )
}

export default CustomMarker