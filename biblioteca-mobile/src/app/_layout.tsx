import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#008080',
        tabBarInactiveTintColor: '#888888',
      }}
    >
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="lua2"
        options={{
          title: 'Lua 2',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="vic"
        options={{
          title: 'Vic 1',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="vic2"
        options={{
          title: 'Vic 2',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barcode-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}