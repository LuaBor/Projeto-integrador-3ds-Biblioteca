import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Esconde a barra preta do topo em todas as telas
      }}
    />
  );
}
