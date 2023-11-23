import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style.js';

interface UserStoriesProps {
  firstName: string;
  profileImage: any;
}
const UserStory: React.FC<UserStoriesProps> = ({firstName, profileImage}) => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={profileImage} />
      </View>
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
