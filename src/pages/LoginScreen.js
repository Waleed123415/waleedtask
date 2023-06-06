import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import Loader from './Loader';



const CustomButton = ({ title, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleCheckboxToggle = () => {
    setChecked(!checked);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in...');
    navigation.navigate('Signup');
  };
  return (
    <>
    {loading?
      <Loader/>
      :<View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('./Image/uix.png')}
          style={styles.logo1}
        />
      </View>
      <Text style={styles.header}>Hi, Welcome Back! 👋</Text>
      <Text style={styles.desc}>Hello again, you've been missed!</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.forgotPasswordContainer}>
      
          <Text style={styles.checkboxText}>Remember Me</Text>
        
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <CustomButton style={styles.btn} title="Login" onPress={handleLogin} />
      
      <View style={{flexDirection:'row',gap:15}}>
      <View style={styles.divider} />
      <View><Text style={styles.ts}>Or With</Text></View>
      <View style={styles.divider} />
      </View>


      <View style={styles.rowContainer}>
        <View style={styles.Gh}>
          <Image source={require('./Image/github.png')} style={styles.logo} />
          <Text style={styles.text}>Github</Text>
        </View>
        <View style={styles.GL}>
          <Image source={require('./Image/gitlab.png')} style={styles.logo} />
          <Text style={styles.text}>GitLab</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.boss}>Already have an account?</Text>
        <TouchableOpacity style={styles.bn} onPress={handleLogin}>
          <Text style={styles.bn}>signup</Text>
        </TouchableOpacity>
      </View>
    </View>
    }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    paddingRight: 28,
    paddingLeft: 27,
    marginTop: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Manrope',
    color: '#000000',
    lineHeight: 34,
  },
  desc: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Manrope',
    color: '#999EA1',
    lineHeight: 19,
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Manrope',
    color: '#00004D',
    lineHeight: 19,
    marginBottom: 7,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap:13,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Manrope',
    color: '#000C14',
    lineHeight: 19,
    marginBottom: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Manrope',
    color: '#000C14',
    lineHeight: 19,
    marginLeft: 8,
  },
   forgotPasswordContainer: {
    justifyContent: 'space-between',
    display:'flex',
    flexDirection:'row',

  },
  forgotPasswordText: {
    color: '#FB344F',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Manrope',
    lineHeight: 19,
  },
  button: {
    backgroundColor: '#351A96',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    lineHeight: 23,
    fontStyle: 'normal',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '600',
  },
  ts: {
    marginTop: 22,
    textAlign: 'center',
    borderRadius: 5,
    color: '#242A31',
    fontSize: 14,
    lineHeight: 19,
    fontStyle: 'normal',
    fontFamily: 'Manrope',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '600',
  },
  Gh: {
    marginTop: 32,
    marginBottom: 20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    height:45,
    gap:10,
    alignItems:'center',
    width: 173,
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderColor: '#CDD1E0',
  },
  GL: {
    marginTop: 32,
    marginBottom: 20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    height:45,
    gap:10,
    alignItems:'center',
    width: 173,
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderColor: '#CDD1E0',
  },
  logo: {
    width: 23,
    height: 22,
   
  },
  text:{
fontSize:17,
  },
  logo1: {
    marginBottom: 30,
    marginTop:40,
    marginLeft: 159.56,
    height: 77.62,
    marginRight: 160,
  },
  logoContainer: {
    alignItems: 'center',
  },
  boss: {
    color: '#999EA1',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: 'Manrope',
    fontWeight: '600',
  },
  bn:{
    color: '#160062',
    fontSize: 14,
    lineHeight: 19,
    justifyContent:'center',
    fontStyle: 'normal',
    fontFamily: 'Manrope',
    fontWeight: '600',

  },
  divider: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 10,
    flex:1,
  },
});

export default LoginScreen;
