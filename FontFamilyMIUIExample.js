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
  'sans-serif', // 中文部分回退为小米兰亭Pro
  'serif', // 中文部分回退为思源宋体
  'monospace', // 中文部分回退为思源黑体
  'source-sans-pro', // 中文部分回退为思源黑体

  'miui', // 小米兰亭
  'mipro', // 小米兰亭
].map(fontFamily => ({fontFamily, key: fontFamily}));

const Item = ({fontFamily, title}) => (
  <View style={styles.item}>
    <Text style={[styles.title, {fontFamily}]}>{title}</Text>
    <Text style={[styles.title, {fontFamily}]}>{fontFamily}</Text>
  </View>
);

const FontFamilyMIUIExample = () => {
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

export default FontFamilyMIUIExample;
