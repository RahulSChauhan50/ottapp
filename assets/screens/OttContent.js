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
import {Card} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';

const offer = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
    status: 'In review',
    id: '01',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Active',
    id: '02',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    status: 'Pending',
    id: '03',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
];

class OttContent extends Component {
  videoError = e => {
    console.log(e);
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#111111'}}>
        <StatusBar backgroundColor="black" />
        <View style={{width: '100%', height: 250}}>
          <Video
            source={require('../media/videoplayback.mp4')}
            ref={ref => {
              this.player = ref;
            }}
            resizeMode="contain"
            style={{flex: 1, backgroundColor: 'black'}}
            onError={this.videoError}
            controls={true}
          />
          <Card
            style={{
              paddingStart: '2%',
              paddingVertical: 10,
              margin: 0,
              backgroundColor: '#1F1F1F',
              elevation: 10,
            }}>
            <Text
              style={{
                fontSize: moderateScale(20),
                fontWeight: '600',
                color: 'white',
              }}>
              Doctor Strange : Multiverse of Madness
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: moderateScale(16), color: 'white'}}>
                Rating :{' '}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={moderateScale(20)} color={'yellow'} />
                <Icon name="star" size={moderateScale(20)} color={'yellow'} />
                <Icon name="star" size={moderateScale(20)} color={'yellow'} />
                <Icon name="star" size={moderateScale(20)} color={'yellow'} />
                <Icon name="star" size={moderateScale(20)} color={'grey'} />
              </View>
            </View>
          </Card>
        </View>
        <ScrollView>
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
              Genre : Action
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
              Genre : Drama
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
              Genre : Romance
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

export default OttContent;
