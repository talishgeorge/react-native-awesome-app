import React from 'react';
import {View, Text} from 'react-native';
import style from './style.js';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

interface UserStoriesProps {
  firstName: string;
  profileImage: any;
}
const UserStory: React.FC<UserStoriesProps> = ({firstName, profileImage}) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimension={65} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
