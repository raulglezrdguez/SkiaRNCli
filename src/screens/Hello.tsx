import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';
import useNavigation from '../hooks/useNavigation';
import {HELLO_SCREEN} from '../consts';

interface Props {
  name: string;
}
const Hello: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  useNavigation(HELLO_SCREEN, componentId);
  const size = 256;
  const r = size * 0.33;

  return (
    <>
      <Text>
        Hello {componentId} - {name}
      </Text>
      <Canvas style={styles.canvas}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={size - r} cy={r} r={r} color="magenta" />
          <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
        </Group>
      </Canvas>
    </>
  );
};
Hello.options = {
  topBar: {
    title: {
      text: HELLO_SCREEN,
    },
  },
};

export default Hello;

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
