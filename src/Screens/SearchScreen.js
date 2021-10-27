import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SearchBar from '../Components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  return (
    <View>
      <SearchBar />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
