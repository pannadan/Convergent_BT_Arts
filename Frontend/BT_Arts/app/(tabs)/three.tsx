import { ActivityIndicatorBase, ScrollView, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView} from 'react-native-safe-area-context';
import { Title, Caption, Avatar, Icon} from 'react-native-paper';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row', marginTop: 15}}>
          <Avatar.Image
            source={require('../(tabs)/longhorn.jpg')}
            size={80}
          />
          <View style={{marginLeft:20}}>
            <Title style={[styles.title, {marginTop:15, marginBottom:5}]}>Bevo</Title>
            <Caption style={styles.caption}>@BevoFromUT</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Text style={{color:"#777777", marginTop: 15, marginLeft: 10}}>Austin, TX</Text>
          <Text style={[styles.greenTextBubble, {marginTop: 5}]}>Austinite</Text>
          <Text style={styles.textBubble}>53 Friends</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    backgroundColor: '#fff'
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
    backgroundColor: '#777777',
    borderRadius: 15,
    padding: 10,
    marginLeft: 0,
    marginRight: 30,
    overflow: 'hidden',
  }, 
  greenTextBubble: {
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
    overflow: 'hidden'
  },
});
