import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {Card, Avatar, List} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const offer = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
    status: 'In review',
    id: '01',
    genre: 'Action',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Active',
    id: '02',
    genre: 'Romance',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    status: 'Pending',
    id: '03',
    genre: 'Horror',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    genre: 'Thriller',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    genre: 'Drama',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    genre: 'Animation',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
    genre: 'Comedy',
  },
];

export class Favourites extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <View
          style={{
            padding: '2%',
            flex: 1,
          }}>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{justifyContent: 'space-evenly', flex: 1}}
            data={offer}
            renderItem={({item, index, separators}) => (
              <Card
                style={{
                  marginHorizontal: 10,
                  borderRadius: 10,
                  elevation: 5,
                  marginBottom: 10,
                  backgroundColor: '#1F1F1F',
                }}>
                <Image
                  source={{uri: item.img}}
                  style={{
                    width: 150,
                    height: 150,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                  }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#2176E3',
                    padding: 10,
                    color: 'white',
                  }}>
                  Movie Name
                </Text>
              </Card>
            )}
            keyExtractor={(item, ind) => ind}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Favourites;
