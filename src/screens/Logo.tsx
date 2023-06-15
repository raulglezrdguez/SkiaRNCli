import {StyleSheet, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {useSkiaStore} from '../store/store';
import {
  BlurMask,
  Canvas,
  Circle,
  Group,
  Oval,
  RadialGradient,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';

interface Props {
  name: string;
}
const Logo: NavigationFunctionComponent<Props> = ({componentId}) => {
  const addComponent = useSkiaStore(state => state.addComponent);
  const removeComponent = useSkiaStore(state => state.removeComponent);

  const {width, height} = useWindowDimensions();
  const center = {x: width / 2, y: height / 2};
  const rect = {
    x: width / 2 - 100,
    y: height / 2 - 50,
    width: 200,
    height: 100,
  };
  const r = 25;
  const color = 'lightblue';

  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', `componentDidAppear ${componentId}`);
        addComponent('Logo');
      },
      componentDidDisappear: () => {
        console.log('RNN', `componentDidDisappear ${componentId}`);
      },
      navigationButtonPressed({buttonId}: {buttonId: string}) {
        if (buttonId === 'RNN.back') {
          console.log('The software back button was pressed!');
          Navigation.pop('CenterStack');
          removeComponent('Logo');
        }
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
    <Canvas style={styles.canvas}>
      <Circle c={center} r={r} color={color}>
        <RadialGradient
          c={vec(center.x - 10, center.y - 10)}
          r={(r / 4) * 3}
          colors={['blue', 'lightblue']}
        />
        <BlurMask blur={10} style={'solid'} />
      </Circle>
      <Group color={color} style={'stroke'} strokeWidth={10}>
        <SweepGradient c={center} colors={['lightblue', 'blue', 'lightblue']} />
        <BlurMask blur={10} style={'outer'} />
        <Oval rect={rect} />
        <Oval
          rect={rect}
          origin={center}
          transform={[{rotate: -Math.PI / 3}, {scale: -1}]}
        />
        <Oval
          rect={rect}
          origin={center}
          transform={[{rotate: Math.PI / 3}, {scale: -1}]}
        />
      </Group>
    </Canvas>
  );
};
Logo.options = {
  topBar: {
    title: {
      text: 'Logo',
    },
    backButton: {
      popStackOnPress: false,
    },
  },
};

export default Logo;

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
