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
import Carousal from './Carousal/Carousal';

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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar backgroundColor="black" />
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: 200,
              paddingTop: 10,
              backgroundColor: '#111111',
            }}>
            <Carousal data={offer} />
          </View>
          <View>
            <Text
              style={{
                marginStart: '2%',
                marginVertical: 10,
                fontSize: moderateScale(17),
                fontWeight: '600',
                color: 'white',
              }}>
              Genres
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={offer}
              renderItem={({item, index, separators}) => (
                <View style={{alignItems: 'center'}}>
                  <Avatar.Image
                    size={55}
                    source={{uri: item.img}}
                    style={{
                      marginHorizontal: 10,
                      marginBottom: 2,
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      color: 'white',
                    }}>
                    {item.genre}
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <Text
            style={{
              marginStart: '2%',
              marginVertical: 10,
              fontSize: moderateScale(15),
              color: 'white',
            }}>
            Suggested Movies
          </Text>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                marginStart: '2%',
                marginVertical: 10,
                fontSize: moderateScale(17),
                fontWeight: '600',
                color: 'white',
              }}>
              Action
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
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
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                marginStart: '2%',
                marginVertical: 10,
                fontSize: moderateScale(17),
                fontWeight: '600',
                color: 'white',
              }}>
              Drama
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
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
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                marginStart: '2%',
                marginVertical: 10,
                fontSize: moderateScale(17),
                fontWeight: '600',
                color: 'white',
              }}>
              Romance
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
