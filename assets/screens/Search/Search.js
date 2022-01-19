import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {Card, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Search extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#111111'}}>
        <Searchbar
          style={{marginHorizontal: '2%', marginTop: '2%'}}
          placeholder="Search for Movies and Series..."
        />
      </SafeAreaView>
    );
  }
}

export default Search;
