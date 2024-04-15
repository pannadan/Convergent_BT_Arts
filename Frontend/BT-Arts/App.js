// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Camera, CameraType} from 'expo-camera';
// import { shareAsync } from 'expo-sharing';
// import * as MediaLibrary from 'expo-media-library';
// import { Button, TouchableOpacity } from 'react-native';
// import { useEffect, useRef, useState } from 'react';


// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import CameraAppTutorial from './CameraAppTutorial/App.js';

// const Stack = createNativeStackNavigator();
// const [hasCameraPermission, setHasCameraPermission] = useState();
// const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
// const [Type, setType] = useState(CameraType.back);

// export default function App() {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//     //     {/* <Stack.Screen options ={{headerShown: false}} name="Login" component={LoginScreen} /> */}
//     //     {/* <Stack.Screen name="cameraScreen" component={CameraScreen} /> */}
//     //     <Camera style={styles.container} ref={cameraRef}>
//     //     <View style={styles.buttonContainer}>
//     //     <Button title="Take Pic" onPress={takePic} />
//     //     </View>
//     //     <StatusBar style="auto" />
//     //   </Camera>
//     //     {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={type}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
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
// });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        {/* <View style={styles.buttonContainer}> */}
          <Button title="Share" onPress={sharePic} />
          {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
          <Button title="Discard" onPress={() => setPhoto(undefined)} />
        {/* </View> */}
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" color="#fff" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: '#F99245',
    bottom: 30,
    zIndex:1,
    height: 80,
    width: 80,
    borderRadius: 40,
    alignSelf: 'center'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});