import React, {useEffect, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  let color = theme.colors.dark
  return (
    <Tab.Navigator tabBarOptions={{
      keyboardHidesTabBar:true,
      showLabel:false, 
      activeBackgroundColor:theme.colors.dark, 
      activeTintColor:theme.colors.gold,
      inactiveBackgroundColor:theme.colors.dark,
      inactiveTintColor:theme.colors.grey,
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
  
    useEffect(() => {
      persistLogin();
    }, []);
  
    SplashScreen.preventAutoHideAsync();
    
    if (!state.loading) SplashScreen.hideAsync();

  return (
    <NavigationContainer>
        {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="Home" component={MyTabs} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Recover" component={Recover} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
}

export default Navigation;