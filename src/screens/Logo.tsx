import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
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
import useNavigation from '../hooks/useNavigation';
import {LOGO_SCREEN} from '../consts';

interface Props {
  name: string;
}
const Logo: NavigationFunctionComponent<Props> = ({componentId}) => {
  useNavigation(LOGO_SCREEN, componentId);

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
      text: LOGO_SCREEN,
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
