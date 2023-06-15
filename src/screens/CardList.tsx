import {FlatList, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import useNavigation from '../hooks/useNavigation';
import {CARDS_SCREEN, data} from '../consts';
import Card from '../components/Card';
import {useFont} from '@shopify/react-native-skia';

interface Props {
  name: string;
}
const CardList: NavigationFunctionComponent<Props> = ({componentId}) => {
  useNavigation(CARDS_SCREEN, componentId);

  const nameFont = useFont(
    require('../../assets/fonts/MonteCarlo-Regular.ttf'),
  );
  const descFont = useFont(require('../../assets/fonts/Lato-Regular.ttf'));

  if (nameFont === null || descFont === null) {
    return null;
  }

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Card
          key={item.id}
          index={item.id.toString()}
          data={item}
          nameFont={nameFont}
          descFont={descFont}
        />
      )}
    />
  );
};
CardList.options = {
  topBar: {
    title: {
      text: CARDS_SCREEN,
    },
    backButton: {
      popStackOnPress: false,
    },
  },
};

export default CardList;

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#EFEEEE',
  },
  contentContainer: {
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    paddingBottom: 40,
  },
});

/*
<ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      {data.map(item => (
        <Card
          key={item.id}
          index={item.id.toString()}
          data={item}
          nameFont={nameFont}
          descFont={descFont}
        />
      ))}
    </ScrollView>
*/
