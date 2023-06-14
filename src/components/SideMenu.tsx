import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  name: string;
}

const SideMenu: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  return (
    <View>
      <Text>
        SideMenu {componentId} {name}
      </Text>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({});
