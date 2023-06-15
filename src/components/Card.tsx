import React from 'react';
import {
  Box,
  BoxShadow,
  Canvas,
  Text,
  rect,
  rrect,
} from '@shopify/react-native-skia';
import {Dimensions, StyleSheet} from 'react-native';

import {DataCard} from '../types/types';

const {width} = Dimensions.get('window');

const Card = ({data, index, nameFont, descFont}: DataCard) => {
  return (
    <Canvas style={styles.canvas} key={index}>
      <Box box={rrect(rect(16, 20, width - 32, 100), 12, 12)} color="#add8e6">
        <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" inner />
        <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" inner />
        <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" />
        <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" />
      </Box>
      <Text x={32} y={56} text={data?.name} font={nameFont} />
      <Text x={32} y={92} text={data?.desc} font={descFont} />
    </Canvas>
  );
};

const styles = StyleSheet.create({
  canvas: {
    height: 140,
    width: width,
  },
});

export default Card;
