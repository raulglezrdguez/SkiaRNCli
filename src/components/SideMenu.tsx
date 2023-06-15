import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  name: string;
}

const SideMenu: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  return (
    <View style={styles.root}>
      <Text>
        SideMenu {componentId} - {name}
      </Text>
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
