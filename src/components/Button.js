import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../helpers/colorConstants';

const Button = ({buttonTitle, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, disabled && styles.lowOpacity]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonTitle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    height: hp('6.5%'),
    width: wp('85%'),
    alignSelf: 'center',
    marginVertical: hp('1%'),
    backgroundColor: colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: hp('2.5%'),
    textAlign: 'center',
    color: colors.white,
  },
  lowOpacity: {opacity: 0.5},
});
