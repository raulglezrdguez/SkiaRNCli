import {Navigation} from 'react-native-navigation';
import Hello from './src/screens/Hello';
import SideMenu from './src/components/SideMenu';

Navigation.registerComponent('Hello', () => Hello);
Navigation.registerComponent('SideMenu', () => SideMenu);

const mainRoot = {
  root: {
    sideMenu: {
      left: {
        component: {
          name: 'SideMenu',
        },
      },
      center: {
        stack: {
          id: 'CenterStack',
          children: [
            {
              component: {
                name: 'Hello',
              },
            },
          ],
        },
      },
    },
  },
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(mainRoot);
});
