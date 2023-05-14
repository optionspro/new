import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function register() {
  return (
    <View style={styles.container}>
    
            <Text style={styles.title}>Let's<Text style={styles.boldText}>  Sign In</Text></Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
      </Text>

      <TouchableOpacity style={[styles.button, styles.leftButton]}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.rightButton]}>
        <Text style={styles.buttonText}>Socmed</Text>
      </TouchableOpacity>

      {/* Item Separator */}
      <View style={styles.itemSeparator}></View>
      
      <Text style={styles.forgotPassword}>Forgot password?</Text>

      <Text style={styles.text}>Don’t have an account? <Text style={styles.text2}>Register</Text></Text>

      <Text style={styles.showPassword}>Show password</Text>

      
      <View style={styles.inputContainer2}></View>
      <View style={styles.inputContainer}>


      


    </View>

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
    fontSize: 12,
    color: '#fff',
    marginTop: 16,
  },
  text2: {
    fontSize: 12,
    color: '#00B7B7',
    marginTop: 16,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#252B5C',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 40,
  },
  leftButton: {
    position: 'absolute',
    backgroundColor: '#252B5C',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 158.5,
    height: 70,
    left: '6.4%',
    top: '69.46%',
  },
  rightButton: {
    height: 70,
    width: 158.5,
    borderRadius: 25,
    backgroundColor: '#252B5C',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: '6.4%',
    top: '69.46%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemSeparator: {
    height: 1,
    width: 337,
    borderRadius: 0,
    position: 'absolute',
    left: '6.4%',
    right: '6.4%',
    top: '62.63%',
    bottom: '27.83%',
    backgroundColor: '#FFFFFF',
  },
  forgotPassword: {
    position: 'absolute',
    width: 107,
    height: 20,
    left: 24,
    top: 410,
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.03,
    color: '#FFFFFF',
  },
  showPassword: {
    position: 'absolute',
    width: 94,
    height: 20,
    right: 20,
    top: 410,
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.03,
    color: '#FFFFFF',
  },
  inputContainer: {
    position: 'absolute',
    left: '6.4%',
    right: '6.4%',
    top: '40.21%',
    height: 56,
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  inputContainer2: {
    position: 'absolute',
    left: '6.4%',
    right: '6.4%',
    top: '30.21%',
    height: 56,
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
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
    top: 178,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.03,
    color: '#FFFFFF',
  },
});
