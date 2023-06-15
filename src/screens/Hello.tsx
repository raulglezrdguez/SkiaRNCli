import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  name: string;
}

const Hello: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  return (
    <View style={styles.root}>
      <Text>
        Hello {componentId} - {name}
      </Text>
    </View>
  );
};
Hello.options = {
  topBar: {
    title: {
      text: 'Hello',
    },
  },
};

export default Hello;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
