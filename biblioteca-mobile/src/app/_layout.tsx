import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
        },
        tabBarActiveTintColor: '#007686',
        tabBarInactiveTintColor: '#8e8e93',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="login" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="lua2"
        options={{
          title: 'Lua 2',
          tabBarLabel: 'Lua 2',
          tabBarIcon: ({ color, size }) => (
           <Entypo name="menu" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="vic"
        options={{
          title: 'Vic 1',
          tabBarLabel: 'Vic 1',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="library" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="vic2"
        options={{
          title: 'Vic 2',
          tabBarLabel: 'Vic 2',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="barcode" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}