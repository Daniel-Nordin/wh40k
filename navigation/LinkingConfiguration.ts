import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Kabalite: {
            screens:{
              KabaliteScreen: 'kabalite',
            },
          },
          Archon: {
            screens: {
              ArchonScreen: 'archon',
            },
          },
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
