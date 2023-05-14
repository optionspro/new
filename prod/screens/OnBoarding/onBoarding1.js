import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function onBoarding1() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Frame 19.png')}
        style={{ width: 100, height: 80 }}
      />
      <Text style={styles.text}>Let's start</Text>
      <Text style={styles.text2}>Made with love</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20, // optional: add some padding to the bottom,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginTop: 350,
  },
  text2: {
    fontSize: 10,
    color: '#fff',
    marginTop: 16,
  }
});
