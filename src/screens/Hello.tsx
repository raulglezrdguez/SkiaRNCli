import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  name: string;
}

const Hello: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  return (
    <View>
      <Text>
        Hello {componentId} {name}
      </Text>
    </View>
  );
};

export default Hello;

const styles = StyleSheet.create({});
