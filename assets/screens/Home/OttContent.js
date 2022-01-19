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
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    status: 'Ongoing',
    id: '06',
  },
];

class OttContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  videoError = e => {
    console.log(e);
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#111111'}}>
        <StatusBar backgroundColor="black" />
        <View style={{width: '100%', height: 250}}>
          <Video
            source={require('../../media/videoplayback.mp4')}
            ref={ref => {
              this.player = ref;
            }}
            resizeMode="contain"
            style={{flex: 1, backgroundColor: 'black'}}
            onError={this.videoError}
            controls={true}
          />
        </View>
        <View>
          <List.Accordion
            style={{backgroundColor: '#111111'}}
            title={'Movie Name'}
            titleStyle={{
              fontSize: moderateScale(20),
              fontWeight: '600',
              color: 'white',
            }}
            description={'Movie Stars, Singers and Directors'}
            descriptionStyle={{
              fontSize: moderateScale(10),
              fontWeight: '500',
              color: 'white',
            }}
            expanded={this.state.expanded}
            onPress={() => this.setState({expanded: !this.state.expanded})}>
            <Card
              style={{
                paddingStart: '2%',
                paddingVertical: 10,
                margin: 0,
                backgroundColor: '#1F1F1F',
                elevation: 10,
              }}>
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
              <Text style={{color: 'white'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a ornare sem. Pellentesque vel arcu ante. Nam accumsan, justo
                eget convallis feugiat, purus nunc vehicula mi, quis ultricies
                nunc felis ut nisl. Aenean cursus est ex, sit amet dapibus
                lectus tincidunt sit amet. Donec auctor fringilla nulla, sit
                amet luctus mi. Proin id sem ante. Nulla pretium lectus mi, et
                ornare urna convallis ut. Proin ac tincidunt elit. Sed in mattis
                urna. Morbi dapibus ligula ac augue lobortis aliquet. Aenean
                ullamcorper, magna ut venenatis imperdiet, purus orci egestas
                massa, eget pellentesque libero libero facilisis ex. Phasellus
                interdum tortor sed leo bibendum sagittis. Aliquam ullamcorper
                nec magna sit amet imperdiet. Donec eu porta risus. Proin ac
                egestas augue. In iaculis sollicitudin sem in iaculis.
                Vestibulum est tellus, egestas non volutpat vitae, dignissim
                vitae nibh. Nulla finibus venenatis velit at consequat. Quisque
                egestas tempor semper. Praesent finibus nulla orci, et
                condimentum enim vulputate sed. Duis vitae turpis at diam luctus
                pulvinar nec in sem.
              </Text>
            </Card>
          </List.Accordion>
        </View>
        <ScrollView>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={offer}
              renderItem={({item, index, separators}) => (
                <Avatar.Image
                  key={index}
                  size={55}
                  source={{uri: item.img}}
                  style={{margin: 10}}
                />
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
