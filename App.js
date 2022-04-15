/* eslint-disable prettier/prettier */
/**
 * Health App
 * https://github.com/Nouha18
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import logo from './splashhealth.png';

 const SectionFig = () =>{
   return (
     <Image src={logo} style={{display:'block',width:198, height:286,}}
     />
   );
 }

function App() {
  React.useEffect(() => {
    const interval = setInterval(() => {
      return (<SectionFig/>);
    }, 1900);
    return () => clearInterval(interval);
  }, []);


  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={true ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
       
        <View
          style={{
            backgroundColor: '#127147',Color:'#222'
          }}>
         <Text>Home Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  backgroundStyle:{
        backgroundColor:'#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
