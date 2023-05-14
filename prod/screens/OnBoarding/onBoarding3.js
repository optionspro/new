import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function onBoarding3() {
  return (
    <View style={styles.container}>
        <View style={styles.backButton}>
        <Ionicons name="ios-arrow-back" size={32} color="#fff" />
      </View>
      <Text style={styles.skipText}>Skip</Text>
      <Text style={styles.title}>Fast sell your property
        {'\n'}in just<Text style={styles.boldText}> one click.</Text></Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
      </Text>
      <Image
        source={require('../../assets/Rectangle 7-1.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.progressBar} />
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
    paddingBottom: 20, // optional: add some padding to the bottom
  },
  backButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 18,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipText: {
    position: 'absolute',
    width: 38,
    height: 22,
    left: 330,
    top: 34,
    borderRadius: 0,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.03,
    color: '#FFFFFF'
  },
  title: {
    position: 'absolute',
    width: 426,
    height: 90,
    left: 32,
    top: 126,
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 45,
    letterSpacing: 0,
    color: '#FFFFFF',
  },
  boldText: {
    fontWeight: '800',
  },
  description: {
    position: 'absolute',
    height: 40,
    left: '8.53%',
    right: '20.53%',
    top: 228,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.03,
    color: '#FFFFFF',
  },
  image: {
    position: 'absolute',
    width: 345,
    height: 322,
    left: 15,
    top: 388,
  },
  button: {
    position: 'absolute',
    width: 162,
    height: 54,
    left: 106,
    top: 683,
    backgroundColor: '#00B7B7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.03,
    color: '#FFFFFF',
  },
  progressBar: {
    position: 'absolute',
    width: 48,
    height: 3,
    left: 152,
    top: 766,
    backgroundColor: '#FFFFFF',
  },
});