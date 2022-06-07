import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import home from '../screens/home';

const screens = {
    Home: {
        screen: home
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
