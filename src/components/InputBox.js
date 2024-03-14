import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../helpers/colorConstants';

const InputBox = ({value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.inputBox}
      selectionColor={colors.primary}
      placeholder={placeholder}
      placeholderTextColor={colors.grey}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    height: hp('6.5%'),
    width: wp('85%'),
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: hp('1%'),
    borderColor: colors.primary,
    borderRadius: 15,
    paddingHorizontal: wp('5%'),
  },
});
