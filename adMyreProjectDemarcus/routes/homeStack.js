import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../Components/LoginPage'
import SignUp from '../Components/SignUp'
import LoggedIn from '../Components/LoggedInPage'
const screens = {
    Login: {
        screen: Login
    },

    SignUp: {
        screen: SignUp
    },

    LoggedIn: {
        screen: LoggedIn
    },

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);