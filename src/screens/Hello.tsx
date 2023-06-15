import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useSkiaStore} from '../store/store';

interface Props {
  name: string;
}
const Hello: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  const setComponent = useSkiaStore(state => state.setComponent);

  useEffect(() => {
    setComponent('Hello');
  }, [setComponent]);

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
