import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../helpers/colorConstants';
import {icons} from '../helpers/iconConstants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const param = route.params.product;
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButtonView}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.backIcon}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          source={{uri: param.thumbnail}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
        <Text style={styles.productTitle}>{param.title}</Text>
        <Text style={styles.description}>{param.description}</Text>
        <Text style={styles.brand}>{`Brand: ${param.brand}`}</Text>
        <Text style={styles.priceText}>{`Price: ${param.price}`}</Text>
      </View>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backButtonView: {
    marginTop: hp('1%'),
    marginLeft: wp('1%'),
  },
  backIcon: {
    height: wp('8%'),
    width: wp('8%'),
    tintColor: colors.primary,
  },
  imageStyle: {
    width: wp('100%'),
    height: wp('66%'),
  },
  productTitle: {
    fontSize: hp('3%'),
    color: colors.black,
    paddingHorizontal: wp('5%'),
    marginTop: hp('1%'),
    fontWeight: '600',
  },
  priceText: {
    fontSize: hp('2%'),
    color: colors.darkGrey,
    paddingHorizontal: wp('5%'),
    marginTop: hp('0.5%'),
    fontWeight: '400',
  },
  description: {
    fontSize: hp('2%'),
    color: colors.black,
    paddingHorizontal: wp('5%'),
    marginTop: hp('0.5%'),
    fontWeight: '400',
  },
  brand: {
    fontSize: hp('2%'),
    color: colors.black,
    paddingHorizontal: wp('5%'),
    marginTop: hp('0.5%'),
    fontWeight: '400',
  },
});
