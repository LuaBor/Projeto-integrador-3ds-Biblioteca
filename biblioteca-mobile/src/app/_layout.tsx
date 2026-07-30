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
      {/* 1. Vic 1 (arquivo vic.tsx) */}
      <Tabs.Screen
        name="vic"
        options={{
          title: 'Vic 1',
          tabBarLabel: 'Vic 1',
        }}
      />

      {/* 2. Lua 1 (arquivo index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Lua 1',
          tabBarLabel: 'Lua 1',
        }}
      />

      {/* 3. Vic 2 (arquivo vic2.tsx) */}
      <Tabs.Screen
        name="vic2"
        options={{
          title: 'Vic 2',
          tabBarLabel: 'Vic 2',
        }}
      />

      {/* 4. Lua 2 (arquivo lua2.tsx) */}
      <Tabs.Screen
        name="lua2"
        options={{
          title: 'Lua 2',
          tabBarLabel: 'Lua 2',
        }}
      />

      {/* Esconde a rota duplicada do arquivo lua.tsx se ele existir na pasta */}
      <Tabs.Screen
        name="lua"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}