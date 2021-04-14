import React, {useEffect, useContext} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screen/Login';
import ExpenseList from '../screen/ExpenseList'
import Recover from '../screen/Recover'
import SignUp from '../screen/SignUp'
import theme from '../theme'
import LogOut from '../screen/LogOut';
import { Feather } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import {Context as AuthContext} from '../providers/AuthContext';
import Expense from '../shared/Expense';
import InfoGraph from '../shared/InfoGraph';
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import UserForm from '../forms/UserForm';
import { useColorScheme } from 'react-native';
import LoginForm from '../forms/LoginForm';
import SignupForm from '../forms/SignUpForm';
import Alert from '../shared/Alert';
import PopUpMessage from '../shared/PopUpMessage';
import UserLogo from '../shared/UserLogo';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  let colors = theme.light;
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel:false, 
      activeBackgroundColor: colors.text, 
      activeTintColor: colors.gold,
      inactiveBackgroundColor: colors.text,
      inactiveTintColor: colors.background,
      }}>
      <Tab.Screen name="Home" component={ExpenseList} options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" size={size} color={color} />
        ),
      }} 
      />
      <Tab.Screen name="User" component={LogOut} options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" size={size} color={color} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

const Navigation = () => {
    const { state, persistLogin } = useContext(AuthContext);
    const scheme = useColorScheme();
    const CustomDefaultTheme ={
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: '#efe6dd', //pastel
        text: '#231F20', //dark
      }
    }
    const CustomDarkTheme ={
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: '#231F20',
        text: '#efe6dd',
      }
    }
  
    useEffect(() => {
      persistLogin();
    }, []);
  
    SplashScreen.preventAutoHideAsync();
    
    if (!state.loading) SplashScreen.hideAsync();

  return (
    <NavigationContainer theme={scheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}>
        {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="Home" component={MyTabs} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login} style={{color:theme.light.red}}/>
                <Stack.Screen name="Recover" component={Recover} style={{color:theme.light.red}}/>
                <Stack.Screen name="SignUp" component={SignUp} style={{color:theme.light.red}}/>
                <Stack.Screen name="ExpenseList" component={ExpenseList} style={{color:theme.light.red}}/>
                <Stack.Screen name="LogOut" component={LogOut} style={{color:theme.light.red}}/>
                <Stack.Screen name="UserForm" component={UserForm} style={{color:theme.light.red}}/>
                <Stack.Screen name="InfoGraph" component={InfoGraph} style={{color:theme.light.red}}/>
                <Stack.Screen name="Expense" component={Expense} style={{color:theme.light.red}}/>
                <Stack.Screen name="LoginForm" component={LoginForm} style={{color:theme.light.red}}/>
                <Stack.Screen name="SignUpForm" component={SignupForm} style={{color:theme.light.red}}/>
                <Stack.Screen name="Alert" component={Alert} style={{color:theme.light.red}}/>
                <Stack.Screen name="PopUpMessage" component={PopUpMessage} style={{color:theme.light.red}}/>
                <Stack.Screen name="UserLogo" component={UserLogo} style={{color:theme.light.red}}/>
                
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
}
//<Stack.Screen name="" component={}/>
export default Navigation;