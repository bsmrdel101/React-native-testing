import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../App/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Supplies Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

