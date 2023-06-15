import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {useSkiaStore} from '../store/store';

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
      {!components.includes('Hello') && (
        <Button
          title="Hello"
          color="#710ce3"
          onPress={() =>
            Navigation.push('CenterStack', {
              component: {
                name: 'Hello',
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
      {!components.includes('Demo') && (
        <Button
          title="Demo"
          color="#710ce3"
          onPress={() =>
            Navigation.push('CenterStack', {
              component: {
                name: 'Demo',
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
