import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '@/styles/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Ishaan\'s Group',
    userImg: require('../../assets/images/UTTower.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, so excited to meet y\'all!.',
  },
  {
    id: '2',
    userName: 'Surya\'s Group',
    userImg: require('../../assets/images/Taco.png'),
    messageTime: '2 hours ago',
    messageText:
      'Is there a dress code?',
  },
  {
    id: '3',
    userName: 'Akshitha\'s Group',
    userImg: require('../../assets/images/Painting.png'),
    messageTime: '1 hours ago',
    messageText:
      'Anyone need a ride?',
  },
  {
    id: '4',
    userName: 'Aayush\'s Group',
    userImg: require('../../assets/images/Concert.png'),
    messageTime: '1 day ago',
    messageText:
      'What are y\'all planning on bringing?',
  },
  {
    id: '5',
    userName: 'Andrea\'s Group',
    userImg: require('../../assets/images/Coffee.png'),
    messageTime: '2 days ago',
    messageText:
      'Is it ok if I bring a friend?',
  },
];

const MessagesScreen = ({navigation}) => {
    return (
      <Container style={styles.container}>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('ChatScreen', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg style={styles.UserImg}source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f6ECDC',
  },
  UserImg: {
    height: 60,
    width: 48,
    borderRadius: -10,
    overflow: 'visible'
  }
});