import { StyleSheet, View } from 'react-native';
// screens
import Login from "./screens/login";
// components
import Header from "./components/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
