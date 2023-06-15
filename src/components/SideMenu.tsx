import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {useSkiaStore} from '../store/store';
import {CARDS_SCREEN, HELLO_SCREEN, IMAGE_SCREEN, LOGO_SCREEN} from '../consts';

interface Props {
  name: string;
}

const SideMenu: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  const components = useSkiaStore(state => state.components);
  console.log(components);
  return (
    <View style={styles.root}>
      <Text>
        SideMenu {componentId} - {name}
      </Text>
      {!components.includes(HELLO_SCREEN) && (
        <Button
          title={HELLO_SCREEN}
          color="#710ce3"
          onPress={() =>
            Navigation.push('CenterStack', {
              component: {
                name: HELLO_SCREEN,
                options: {
                  sideMenu: {
                    left: {
                      visible: false,
                    },
                  },
                },
              },
            })
          }
        />
      )}
      {!components.includes(LOGO_SCREEN) && (
        <Button
          title={LOGO_SCREEN}
          color="#710ce3"
          onPress={() =>
            Navigation.push('CenterStack', {
              component: {
                name: LOGO_SCREEN,
                options: {
                  sideMenu: {
                    left: {
                      visible: false,
                    },
                  },
                },
              },
            })
          }
        />
      )}
      {!components.includes(IMAGE_SCREEN) && (
        <Button
          title={IMAGE_SCREEN}
          color="#710ce3"
          onPress={() =>
            Navigation.push('CenterStack', {
              component: {
                name: IMAGE_SCREEN,
                options: {
                  sideMenu: {
                    left: {
                      visible: false,
                    },
                  },
                },
              },
            })
          }
        />
      )}
      {!components.includes(CARDS_SCREEN) && (
        <Button
          title={CARDS_SCREEN}
          color="#710ce3"
          onPress={() =>
            Navigation.push('CenterStack', {
              component: {
                name: CARDS_SCREEN,
                options: {
                  sideMenu: {
                    left: {
                      visible: false,
                    },
                  },
                },
              },
            })
          }
        />
      )}
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
