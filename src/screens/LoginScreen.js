import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../helpers/iconConstants';
import {colors} from '../helpers/colorConstants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {texts} from '../helpers/textConstants';
import {Button, InputBox} from '../components';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={icons.loginImage}
        style={styles.loginImage}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>{texts.welcome}</Text>
      <InputBox
        value={userName}
        onChangeText={text => setUserName(text)}
        placeholder={texts.userName}
      />
      <InputBox
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder={texts.password}
        secureTextEntry
      />
      <Button
        buttonTitle={texts.login}
        onPress={() => navigation.navigate('Home')}
        disabled={userName.trim().length === 0 || password.trim().length === 0}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  loginImage: {
    height: hp('40%'),
    width: wp('80%'),
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: hp('5%'),
    textAlign: 'center',
    color: colors.primary,
  },
});
