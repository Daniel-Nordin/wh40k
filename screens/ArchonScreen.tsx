import * as React from 'react';
import { StyleSheet } from 'react-native';

import DataTable from '../components/DataTable';
import WeaponTable from '../components/WeaponTable';
import { Text, View } from '../components/Themed';

let data = [8, 2, 2, 3, 3, 5, 5, 9, 5]
const splinterRifle = ["Splinter Rifle", 24, "*", 0, 1]
const blasterRifle = ["Blaster Rifle", 18, 8, 4, -6]
const melee = ["Sword", 0, 0, 0, 1]
const weaponList = [splinterRifle, blasterRifle, melee]

export default function ArchonScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title} lightColor="#000" darkColor="#fff">Archon</Text>
      <View style={styles.dataTable}>
      <DataTable m={data[0]} ws={data[1]} bs={data[2]} s={data[3]} t={data[4]} w={data[5]} a={data[6]} ld={data[7]} sv={data[8]} />
      </View>
      <View style={styles.weaponTable}>
      <WeaponTable t={4} s={data[3]} sv={4} wl={weaponList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  dataTable: {
    height: '7%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  weaponTable: {
    height: '20%',
  },
  data: {
    backgroundColor: "#d3d3d3",
  },
});
