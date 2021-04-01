import * as React from 'react';
import { StyleSheet } from 'react-native';

import DataTable from '../components/DataTable';
import WeaponTable from '../components/WeaponTable';
import { Text, View } from '../components/Themed';

const data = [7, 3, 3, 3, 3, 1, 3, 7, 4]
const splinterRifle = ["Splinter Rifle", 24, "*", 0, 1]
const blasterRifle = ["Blaster Rifle", 18, 8, 4, -6]
const weaponList = [splinterRifle, blasterRifle]

export default function KabaliteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kabalite Warrior</Text>
      <DataTable m={data[0]} ws={data[1]} bs={data[2]} s={data[3]} t={data[4]} w={data[5]} a={data[6]} ld={data[7]} sv={data[8]} />
      <WeaponTable t={4} s={data[3]} sv={4} wl={weaponList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  data: {
    backgroundColor: "#d3d3d3",
  },
});
