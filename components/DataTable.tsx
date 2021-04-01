import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function DataTable({ m, ws, bs, s, t, w, a, ld, sv, }) {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.titleText}>
        M   Ws   Bs   S   T   W   A   Ld  Sv
        </Text>
      </View>
      <View style={styles.stats}>
        <Text>
        {m}"    {ws}+   {bs}+  {s}    {t}   {w}     {a}    {ld}   {sv}+
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
