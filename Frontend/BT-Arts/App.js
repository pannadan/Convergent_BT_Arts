import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

let locationsOfInterest = [
  {
    title: "First",
    location: {
      latitude: 30,
      longitude: -97
    },
    description: "My First Marker"
  },
  {
    title: "Second",
    location: {
      latitude: 31,
      longitude: -97
    },
    description: "My Second Marker"
  }
]

export default function App() {

const [count, setCount] = useState(0);

const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
  longitude: -97.7386,
  latitude: 30.2629
});

  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker 
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      )
    });
  };

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          "latitude": 30.282976196783498, 
          "latitudeDelta": 0.006344073742134526, 
          "longitude": -97.73846177622254, 
          "longitudeDelta": 0.0038039413494459495
        }}
      >
        {showLocationsOfInterest()}
        <Marker 
          draggable
          pinColor='#0000ff'
          coordinate={draggableMarkerCoord}
          onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
        />
        <Marker
          pinColor='#00FF00'
          coordinate={{ latitude: 30.2, longitude: -97.7}}
        >
          <Callout>
            <Text>Count:{count}</Text>
            <Button title='Increment Count' onPress={() => setCount(count+1)} />
          </Callout>
        </Marker>
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
