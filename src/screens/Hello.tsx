import {StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {useSkiaStore} from '../store/store';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';

interface Props {
  name: string;
}
const Hello: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  const addComponent = useSkiaStore(state => state.addComponent);
  const removeComponent = useSkiaStore(state => state.removeComponent);
  const size = 256;
  const r = size * 0.33;

  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', `componentDidAppear ${componentId}`);
        addComponent('Hello');
      },
      componentDidDisappear: () => {
        console.log('RNN', `componentDidDisappear ${componentId}`);
      },
    };
    // Register the listener to all events related to our component
    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      componentId,
    );
    return () => {
      // Make sure to unregister the listener during cleanup
      unsubscribe.remove();
    };
  }, [componentId, addComponent, removeComponent]);

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
      text: 'Hello',
    },
  },
};

export default Hello;

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
