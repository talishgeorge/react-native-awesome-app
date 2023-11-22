import React from 'react';
import {SafeAreaView} from 'react-native';
// import {getFontFamily} from './assets/fonts/helper';
import Title from './components/Title/Title';

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
      {/* <Text style={{fontSize: 50, fontFamily: getFontFamily(baseFont, weight)}}>
        Hello World
      </Text> */}
      <Title title="Lets Explore" />
    </SafeAreaView>
  );
}

export default App;
