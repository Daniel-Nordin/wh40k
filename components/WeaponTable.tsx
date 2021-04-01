import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';




export default function WeaponTable({ t, s, sv, wl }) {

  let list = [];
  for (let index = 0; index < wl.length; index++) {
    let wound = 0;
    if(wl[index][2] == "*"){
       wound = 4
    }else{
      if (wl[index][1] > 0){
        if(wl[index][2] * 2 <= t){
          wound = 6
        }
        if(wl[index][2] < t){
          wound = 5
        }
        if(wl[index][2] == t){
          wound = 4
        }
        if(wl[index][2] > t){
          wound = 3
        }
        if(wl[index][2] >= 2 * t){
          wound = 2
        }
    }else{
      if((wl[index][2] + s) * 2 <= t){
        wound = 6
      }
      if((wl[index][2] + s) < t){
        wound = 5
      }
      if((wl[index][2] + s) == t){
        wound = 4
      }
      if((wl[index][2] + s) > t){
        wound = 3
      }
      if((wl[index][2] + s) >= 2 * t){
        wound = 2
      }
    }
  }
    list[index] = wl[index][0] + " Range: " + wl[index][1] + "\" Wound on: " + wound + "+ Save on: " + ;

  }

  return (
    <View>
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.titleText}>
        {list}
        </Text>
      </View>
      <View style={styles.stats}>
        <Text>
        </Text>
      </View>
      </View>
      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,

  },
  titles: {
    flex: 1,
    backgroundColor: '#98AFC7',
    borderBottomWidth: 1,
  },
  titleText: {
    fontWeight: 'bold',
  },
  stats: {
    flex: 1,
  },
});
