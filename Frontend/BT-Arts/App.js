import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
// npx expo install react-native-maps
// npx expo install expo-sharing
// npx expo install expo-file-system

// let locationsOfInterest = [
//   {
//     title: "Tower",
//     location: {
//       latitude: 30.2862,
//       longitude: -97.7394
//     },
//     description: "UT Tower"
//   },
//   {
//     title: "Second",
//     location: {
//       latitude: -30.2,
//       longitude: 150
//     },
//     description: "My Second Marker"
//   }
// ]

// const mapJson = [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#212121"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#212121"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.country",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.locality",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#bdbdbd"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#181818"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#357553"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#1b1b1b"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#EC8F00"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#EC8F00"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#EC8F5E"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#EC9AAA"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#EC8F5E"
//       },
//       {
//         "weight": 3
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway.controlled_access",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#4e4e4e"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "featureType": "transit",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#000000"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#1f0038"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#3d3d3d"
//       }
//     ]
//   }
// ]

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
//     longitude: 148.11,
//     latitude: -26.85
//   });
//   const mapRef = useRef();

//   const showLocationsOfInterest = () => {
//     return locationsOfInterest.map((item, index) => {
//       return (
//         <Marker 
//           key={index}
//           coordinate={item.location}
//           title={item.title}
//           description={item.description}
//         />
//       )
//     });
//   };

//   const takeSnapshotAndShare = async () => {
//     const snapshot = await mapRef.current.takeSnapshot({ width: 300, height: 300, result: 'base64'});
//     const uri = FileSystem.documentDirectory + "snapshot.png";
//     await FileSystem.writeAsStringAsync(uri, snapshot, { encoding: FileSystem.EncodingType.Base64 });
//     await shareAsync(uri);
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         provider={PROVIDER_GOOGLE}
//         ref={mapRef} 
//         style={styles.map}
//         initialRegion={{
//           latitude: 30.2672,
//           latitudeDelta: 0.1,
//           longitude: -97.7431,
//           longitudeDelta: 0.1,
//         }}
//         customMapStyle={mapJson}
//       >
//         {showLocationsOfInterest()}
//         <Marker 
//           draggable
//           pinColor='#0000ff'
//           coordinate={draggableMarkerCoord}
//           onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
//         />
//         <Marker
//           pinColor='#00ff00'
//           coordinate={{ latitude: -35, longitude: 147}}
//         >
//           <Callout>
//             <Text>Count: {count}</Text>
//             <Button title='Increment Count' onPress={() => setCount(count + 1)} />
//             <Button title='Take Snapshot and Share' onPress={takeSnapshotAndShare} />
//           </Callout>
//         </Marker>
//         <Text style={styles.mapOverlay}>Longitude: {draggableMarkerCoord.longitude}, latitude: {draggableMarkerCoord.latitude}</Text>
//       </MapView>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width:'100%',
//     height: '100%'
//   },
//   mapOverlay: {
//     position: "absolute",
//     bottom: 50,
//     backgroundColor: "#ffffff",
//     borderWidth: 2,
//     borderRadius: 5,
//     padding: 16,
//     left: "25%",
//     width: "50%",
//     textAlign: "center"
//   }
// });