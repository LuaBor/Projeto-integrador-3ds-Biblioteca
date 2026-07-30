
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
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
      }}
    >
      {/* 1. Lua 1 */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Lua 1',
          tabBarLabel: 'Lua 1',
        }}
      />

      {/* 2. Lua 2 */}
      <Tabs.Screen
        name="lua2"
        options={{
          title: 'Lua 2',
          tabBarLabel: 'Lua 2',
        }}
      />

      {/* 3. Vic 1 */}
      <Tabs.Screen
        name="vic"
        options={{
          title: 'Vic 1',
          tabBarLabel: 'Vic 1',
        }}
      />

      {/* 4. Vic 2 */}
      <Tabs.Screen
        name="vic2"
        options={{
          title: 'Vic 2',
          tabBarLabel: 'Vic 2',
        }}
      />

      {/* Esconde qualquer sobra do arquivo lua.tsx se ainda existir */}
      <Tabs.Screen
        name="lua"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
