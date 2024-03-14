import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {apiMethods, makeApiRequest} from '../global/makeApiRequest';
import {GET_PRODUCT_LIST} from '../redux/actions/types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {texts} from '../helpers/textConstants';
import {colors} from '../helpers/colorConstants';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {productList} = useSelector(state => state.app);

  const getProductData = async () => {
    const products = await makeApiRequest(
      apiMethods.get,
      'https://dummyjson.com/products',
    );
    dispatch({type: GET_PRODUCT_LIST, payload: products?.products});
  };

  useEffect(() => {
    if (productList?.length === 0) {
      getProductData();
    }
  }, []);

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <Text style={styles.productListText}>{texts.productList}</Text>
        <FlatList
          data={productList}
          showsVerticalScrollIndicator={false}
          style={styles.listStyle}
          extraData={productList}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() =>
                  navigation.navigate('ProductDetail', {product: item})
                }>
                <Image
                  source={{uri: item.thumbnail}}
                  style={styles.itemImage}
                />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <SafeAreaView />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemContainer: {
    marginVertical: hp('1%'),
    alignSelf: 'center',
    padding: wp('3%'),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
  },
  productListText: {
    fontSize: hp('3%'),
    color: colors.primary,
    paddingHorizontal: wp('5%'),
    marginVertical: hp('1%'),
    fontWeight: '600',
  },
  listStyle: {
    flex: 1,
  },
  itemImage: {
    height: hp('20%'),
    width: wp('85%'),
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: hp('2%'),
    color: colors.black,
    marginTop: hp('0.5%'),
  },
  contentContainerStyle: {
    paddingBottom: hp('5%'),
  },
});
