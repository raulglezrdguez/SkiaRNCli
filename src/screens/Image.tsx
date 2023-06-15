import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {Canvas, ColorMatrix, Image, useImage} from '@shopify/react-native-skia';
import useNavigation from '../hooks/useNavigation';
import {IMAGE_SCREEN} from '../consts';

const {width, height} = Dimensions.get('window');
const filters: {[x: string]: number[]} = {
  Juno: [
    1, 0, 0, 0, 0, -0.4, 1.3, -0.4, 0.2, -0.1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
  ],
  Sepia: [
    0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131,
    0, 0, 0, 0, 0, 1, 0,
  ],
  Greyscale: [
    0.2126, 0.7152, 0.0722, 0, 0, 0.2126, 0.7152, 0.0722, 0, 0, 0.2126, 0.7152,
    0.0722, 0, 0, 0, 0, 0, 1, 0,
  ],
  Gingham: [2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0.5, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  Mayfair: [1, 1, 0.5, 0, 0, 0, 0.5, 1, 0, 0, 0.5, 0.5, 1, 0, 0, 0, 0, 0, 1, 0],
  Valencia: [
    1, 0, 0, 0, 0, -0.2, 1, 0, 0, 0, -0.8, 1.6, 1, 0, 0, 0, 0, 0, 1, 0,
  ],
  'No Filter': [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
};

interface Props {
  name: string;
}
const ImageScreen: NavigationFunctionComponent<Props> = ({componentId}) => {
  useNavigation('Image', componentId);
  const [selectedFilter, setSelectedFilter] = useState<string>('No Filter');
  const handlePress = useCallback(
    (item: string) => () => {
      setSelectedFilter(item);
    },
    [],
  );
  const image = useImage(require('../../assets/car.jpg'));

  return (
    <SafeAreaView>
      <Canvas style={styles.canvas}>
        <ColorMatrix matrix={filters[selectedFilter]} />
        <Image
          image={image}
          fit="contain"
          x={0}
          y={0}
          width={width - 32}
          height={height - 300}
        />
      </Canvas>
      <FlatList
        numColumns={3}
        data={Object.keys(filters)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Text
            style={[
              styles.item,
              selectedFilter === item && styles.selectedItem,
            ]}
            onPress={handlePress(item)}>
            {item}
          </Text>
        )}
        style={styles.list}
      />
    </SafeAreaView>
  );
};
ImageScreen.options = {
  topBar: {
    title: {
      text: IMAGE_SCREEN,
    },
    backButton: {
      popStackOnPress: false,
    },
  },
};

export default ImageScreen;

const styles = StyleSheet.create({
  canvas: {
    height: height - 300,
    marginHorizontal: 16,
    width: width - 32,
  },
  list: {
    margin: 16,
  },
  item: {
    width: '33%',
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '600',
    fontSize: 18,
  },
  selectedItem: {
    color: '#ea4c89',
    borderWidth: 1,
    borderColor: '#ea4c89',
    borderRadius: 12,
  },
});
