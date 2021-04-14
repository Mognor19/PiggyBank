
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
import CreateExpense from '../screen/CreateExpense';
import ModifyExpense from '../screen/ModifyExpense'
import { Feather } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import {Context as AuthContext} from '../providers/AuthContext';
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

function MyStacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExpenseList" component={ExpenseList} />
      <Stack.Screen name="CreateExpense" component={CreateExpense}/>
      <Stack.Screen name="ModifyExpense" component={ModifyExpense}/>
    </Stack.Navigator>
  );
}

function MyTabs() {
  let colors = theme.light;
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeBackgroundColor: colors.text, 
      activeTintColor: colors.gold,
      inactiveBackgroundColor: colors.text,
      inactiveTintColor: colors.background,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStacks}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={LogOut}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
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
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={MyTabs} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Recover" component={Recover}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="ExpenseList" component={ExpenseList}/>
                <Stack.Screen name="LogOut" component={LogOut}/>
                <Stack.Screen name="UserForm" component={UserForm}/>
                <Stack.Screen name="InfoGraph" component={InfoGraph}/>
                <Stack.Screen name="LoginForm" component={LoginForm}/>
                <Stack.Screen name="SignUpForm" component={SignupForm}/>
                <Stack.Screen name="Alert" component={Alert}/>
                <Stack.Screen name="PopUpMessage" component={PopUpMessage}/>
                <Stack.Screen name="UserLogo" component={UserLogo}/>
                
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
