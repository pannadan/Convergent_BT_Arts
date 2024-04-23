import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps';
import locations from '@/assets/data/locations.json';

const CustomMarker = ({ location, onPress }) => {
  
  let iconSource;
  switch (location.type) {
    case 'Landmark':
      iconSource = require('../assets/images/landmarkIcon.png');
      break;
    case 'Food':
      iconSource = require('../assets/images/foodIcon.png');
      break;
    case 'Event':
      iconSource = require('../assets/images/eventsIcon.png');
      break;
    default:
      iconSource = require('../assets/images/icon.png');
      break;
  }
  
  return (
    <Marker
        onPress={onPress}
        coordinate={{ latitude: location.latitude, 
        longitude: location.longitude
        }}
        >
        
        <View style={styles.backg}>
          <Image source={iconSource} 
          style={styles.icon}/>
        </View>
        

    </Marker>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 50,
    flex: 1,
  },
  backg: {
    borderRadius: 20,
    borderColor: 'black',
  }

})

export default CustomMarker


/*
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
*/