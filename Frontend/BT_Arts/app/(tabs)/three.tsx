import { ActivityIndicatorBase, ScrollView, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView} from 'react-native-safe-area-context';
import { Title, Caption, Avatar, Icon} from 'react-native-paper';
import { FlatList } from 'react-native';
import { Image } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{marginTop: 15, backgroundColor:"#F6ECDC", alignItems:'center'}}>
          <Avatar.Image
            source={require('../(tabs)/longhorn.jpg')}
            size={125}
          />
          <View style={{marginLeft:20,backgroundColor:"#F6ECDC"}}>
            <Title style={[styles.title, {marginTop:15, marginBottom:5,}]}>Bevo</Title>
            <Caption style={styles.caption}>@UTMascot</Caption>
          </View>
          <View style={styles.userInfoSection}>
        <View style={[styles.row, {backgroundColor:"#F6ECDC", marginTop:20, alignContent:'center'}]}>
          <Text style={{color:"#777777", marginLeft: 10, marginTop: 20}}>Austin, TX</Text>
          <Text style={[styles.greenTextBubble, {marginLeft: 30, marginTop: 5, color: "#F6ECDC"}]}>Austinite</Text>
          <Text style={[styles.textBubble, {color: "#F6ECDC", marginTop:5}]}>53 Friends</Text>
        </View>
        </View>
        </View>
      </View>

      <View style = {[styles.row, {backgroundColor: "#f6ecdc"}]}>
        <Text style={{color:"#000", marginLeft:30, fontSize: 16, marginTop: -30}}>Food →</Text>
      </View>
      <View style={{flexDirection:'row', marginLeft: 30, backgroundColor: "#f6ecdc"}}>
          <Image style={styles.image} source={require('../../assets/images/carrot.png')}/>
          <Image style={[styles.image, {marginLeft: 10}]} source={require('../../assets/images/fish.png')}/>
          <Image style={[styles.image, {marginLeft: 10}]} source={require('../../assets/images/cake.png')}/>
          <Image style={[styles.image, {marginLeft: 10}]} source={require('../../assets/images/burgerDrink.png')}/>
      </View>

      <View style = {[styles.row, {backgroundColor: "#f6ecdc"}]}>
        <Text style={{color:"#000", marginLeft:30, fontSize: 16, marginTop: 25}}>Landmarks →</Text>
      </View>
      <View style={{flexDirection:'row', marginLeft: 30, backgroundColor: "#f6ecdc"}}>
          <Image style={styles.image} source={require('../../assets/images/home.png')}/>
          <Image style={[styles.image, {marginLeft: 10}]} source={require('../../assets/images/building.png')}/>
      </View>

      <View style = {[styles.row, {backgroundColor: "#f6ecdc"}]}>
        <Text style={{color:"#000", marginLeft:30, fontSize: 16, marginTop: 25}}>Events →</Text>
      </View>
      <View style={{flexDirection:'row', marginLeft: 30, backgroundColor: "#f6ecdc"}}>
          <Image style={styles.image} source={require('../../assets/images/trophy.png')}/>
          <Image style={[styles.image, {marginLeft: 10}]} source={require('../../assets/images/cal.png')}/>
          <Image style={[styles.image, {marginLeft: 10}]} source={require('../../assets/images/friends.png')}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#F6ECDC'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    backgroundColor: '#F6ECDC'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  textBubble: {
    backgroundColor: '#7E471B',
    borderRadius: 15,
    padding: 15,
    overflow: 'hidden',
  }, 
  greenTextBubble: {
    backgroundColor: '#357553',
    borderRadius: 15,
    padding: 15,
    marginLeft: 25,
    marginRight: 25,
    overflow: 'hidden'
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    opacity: 1,
    width: 70,
    height: 70,
    backgroundColor: "#F6ECDC"
  },
});