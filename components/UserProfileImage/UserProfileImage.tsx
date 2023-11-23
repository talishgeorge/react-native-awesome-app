import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

interface UserProfileImageProps {
  profileImage: any;
  imageDimension?: number;
}
const UserProfileImage: React.FC<UserProfileImageProps> = ({
  profileImage,
  imageDimension,
}) => {
  return (
    <View style={[style.userImageContainer, {borderRadius: imageDimension}]}>
      <Image
        source={profileImage}
        style={{width: imageDimension, height: imageDimension}}
      />
    </View>
  );
};

export default UserProfileImage;
