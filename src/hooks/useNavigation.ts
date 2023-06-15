import {useEffect} from 'react';
import {useSkiaStore} from '../store/store';
import {Navigation} from 'react-native-navigation';

const useNavigation = (component: string, componentId: string) => {
  const addComponent = useSkiaStore(state => state.addComponent);
  const removeComponent = useSkiaStore(state => state.removeComponent);

  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', `componentDidAppear ${componentId}`);
        addComponent(component);
      },
      componentDidDisappear: () => {
        console.log('RNN', `componentDidDisappear ${componentId}`);
      },
      navigationButtonPressed({buttonId}: {buttonId: string}) {
        if (buttonId === 'RNN.back') {
          console.log('The software back button was pressed!');
          Navigation.pop('CenterStack');
          removeComponent(component);
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
  }, [componentId, addComponent, removeComponent, component]);
};

export default useNavigation;
