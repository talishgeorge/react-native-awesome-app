import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
// import {getFontFamily} from './assets/fonts/helper';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope as favenvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStories/UserStory';

function App(): JSX.Element {
  // console.log('App function is running');
  // console.log('App function is running1234');
  // console.log('App function is running1234');
  // console.log('App function is running1235');

  // function getMoviesFromAPI() {
  //   console.log('getMoviesFromAPI function is running');
  //   return fetch('https://reactnative.dev/movies.json')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log('json', json);
  //       return json.movies;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
  // const baseFont = 'Inter';
  // const weight = 600;
  const userStories = [
    {
      firstName: 'John',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Oliver',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Talish',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nina',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'George',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title="Lets Explore" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon
            icon={favenvelope}
            color={'#898dAE'}></FontAwesomeIcon>
          <View style={globalStyle.mesasgeNumberContainer}>
            <Text style={globalStyle.mesasgeNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoriesContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
