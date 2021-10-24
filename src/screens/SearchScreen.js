import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import yelp from '../API/yelp';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchAPI = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose',
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermSubmit={() => searchAPI( )} 
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      <Text>Search Sereen</Text>
      <Text>WE have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
