import React from 'react';
import {
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
    </SafeAreaView>
  );
}

export default App;
