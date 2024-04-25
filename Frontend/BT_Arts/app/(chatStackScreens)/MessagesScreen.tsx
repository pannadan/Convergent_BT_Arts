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
    userName: 'Ethan\'s Group',
    userImg: "https://via.placeholder.com/300",
    messageTime: '4 mins ago',
    messageText:
      'Hey there, so excited to meet y\'all!.',
  },
  {
    id: '2',
    userName: 'John\'s Group',
    userImg: "https://via.placeholder.com/300",
    messageTime: '2 hours ago',
    messageText:
      'Is there a dress code?',
  },
  {
    id: '3',
    userName: 'Ken\'s Group',
    userImg: "https://via.placeholder.com/300",
    messageTime: '1 hours ago',
    messageText:
      'Anyone need a ride?',
  },
  {
    id: '4',
    userName: 'Christy\'s Group',
    userImg: "https://via.placeholder.com/300",
    messageTime: '1 day ago',
    messageText:
      'What are y\'all planning on bringing?',
  },
  {
    id: '5',
    userName: 'Alex\'s Group',
    userImg: "https://via.placeholder.com/300",
    messageTime: '2 days ago',
    messageText:
      'Is it ok if I bring a friend?',
  },
];

const MessagesScreen = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('ChatScreen', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
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
    justifyContent: 'center'
  },
});