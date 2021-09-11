import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const fontStack = [
  'PingFang SC', // OK on iOS
  'PingFangSC-Semibold', // OK on iOS
  
  'Songti SC',
  'STSongti-SC-Regular',

  'Hiragino Sans', // OK on iOS
  'HiraginoSans-W3', // OK on iOS
  'HiraginoSans-W7', // OK on iOS

  'Hiragino Maru Gothic ProN', // OK on iOS
  'Hiragino Mincho ProN', // OK on iOS

  'sans-serif', // OK on Android
  'serif', // OK on Android
  'monospace', // OK on Android
  'source-sans-pro', // OK on Android

  'Droid Sans Fallback',

  'Noto Sans CJK',
  'Noto Sans CJK SC',
  'NotoSansCJK-Regular',

  'Noto Serif CJK',
  'Noto Serif CJK SC',
  'NotoSerifCJK-Regular',
].map(fontFamily => ({fontFamily, key: fontFamily}));

const Item = ({fontFamily, title}) => (
  <View style={styles.item}>
    <Text style={[styles.title, {fontFamily}]}>{title}</Text>
    <Text style={[styles.title, {fontFamily}]}>{fontFamily}</Text>
  </View>
);

const FontFamilyExample = () => {
  const renderItem = ({item}) => (
    <Item fontFamily={item.fontFamily} title="开彼源兮，斯流永继" />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={fontStack} renderItem={renderItem} />
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
    fontSize: 24,
  },
});

export default FontFamilyExample;
