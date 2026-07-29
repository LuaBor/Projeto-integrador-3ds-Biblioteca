import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

// Telas temporárias integradas
function LuaScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.screenTitle}>Página 1: Lua 🌙</Text>
    </View>
  );
}

function Lua2Screen() {
  return (
    <View style={styles.center}>
      <Text style={styles.screenTitle}>Página 2: Lua 2 ✨</Text>
    </View>
  );
}

function VicScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.screenTitle}>Página 3: Vic 📚</Text>
    </View>
  );
}

function Vic2Screen() {
  return (
    <View style={styles.center}>
      <Text style={styles.screenTitle}>Página 4: Vic 2 📖</Text>
    </View>
  );
}

export default function HomeCarousel() {
  return (
    <View style={styles.container}>
      {/* Carrossel com as 4 Páginas */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        style={styles.scrollView}
      >
        <View style={styles.page}>
          <Text style={styles.pageBadge}>1 / 4 - Lua</Text>
          <LuaScreen />
        </View>

        <View style={styles.page}>
          <Text style={styles.pageBadge}>2 / 4 - Lua 2</Text>
          <Lua2Screen />
        </View>

        <View style={styles.page}>
          <Text style={styles.pageBadge}>3 / 4 - Vic</Text>
          <VicScreen />
        </View>

        <View style={styles.page}>
          <Text style={styles.pageBadge}>4 / 4 - Vic 2</Text>
          <Vic2Screen />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flex: 1,
  },
  page: {
    width: width,
    flex: 1,
  },
  pageBadge: {
    textAlign: 'center',
    backgroundColor: '#007AFF',
    color: '#fff',
    padding: 6,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});