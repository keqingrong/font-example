import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const fontWeights = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  'bold',
  'normal',
].map(fontWeight => ({
  fontWeight,
  key: fontWeight,
}));

const Item = ({fontWeight, title}) => (
  <View style={styles.item}>
    <Text style={[styles.title, {fontWeight}]}>{title}</Text>
    <Text style={[styles.title, {fontWeight}]}>{fontWeight}</Text>
  </View>
);

const FontWeightExample = () => {
  const renderItem = ({item}) => (
    <Item fontWeight={item.fontWeight} title="开彼源兮，斯流永继" />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={fontWeights} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    // default 900, bold are OK
    // fontFamily: 'miui', // bold is OK
    // fontFamily: 'mipro', // bold is OK
    // fontFamily: 'sans-serif', // bold is OK
    fontSize: 24,
  },
});

export default FontWeightExample;
