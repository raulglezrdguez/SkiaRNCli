import {Navigation} from 'react-native-navigation';
import Hello from './src/screens/Hello';
import SideMenu from './src/components/SideMenu';
import Logo from './src/screens/Logo';
import Image from './src/screens/Image';
import {HELLO_SCREEN, IMAGE_SCREEN, LOGO_SCREEN} from './src/consts';

Navigation.registerComponent(HELLO_SCREEN, () => Hello);
Navigation.registerComponent(LOGO_SCREEN, () => Logo);
Navigation.registerComponent(IMAGE_SCREEN, () => Image);
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
                name: HELLO_SCREEN,
              },
            },
          ],
        },
      },
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(mainRoot);
});
