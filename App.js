import React, {useEffect, useState} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/components/screen/Login';
import ExpenseList from './src/components/screen/ExpenseList'
import Recover from './src/components/screen/Recover'
import SignUp from './src/components/screen/SignUp'
import theme from './src/components/theme'
import SaveLogin from './src/utils/SaveLogin'
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  let color = theme.colors.dark
  return (
    <Tab.Navigator tabBarOptions={{
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
      <Tab.Screen name="User" component={ExpenseList}  options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" size={size} color={color} />
        ),
      }}/>
    </Tab.Navigator>
  );
}
{/*initialParams={{ user: user }}*/}
export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = SaveLogin();
    setUser(userData);
  }, []);

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {user ? (
          <Stack.Screen 
            name="Home" 
            component={MyTabs} 
            />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Recover" component={Recover} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});