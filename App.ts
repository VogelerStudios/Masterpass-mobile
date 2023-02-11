import { StatusBar } from 'expo-status-bar';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
    <View style={styles.container}>
      // @ts-expect-error TS(7027): Unreachable code detected.
      <Text>Open up App.js to start working on your app!</Text>
      // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
