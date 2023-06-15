import {SkFont} from '@shopify/react-native-skia';

export type Data = {
  id: number;
  name: string;
  desc: string;
};

export type DataCard = {
  data: Data;
  index: string;
  nameFont: SkFont | null;
  descFont: SkFont | null;
};
