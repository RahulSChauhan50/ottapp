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
import {Card, Avatar, List, Appbar} from 'react-native-paper';
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

export class MovieScreen extends Component {
  videoError = e => {
    console.log(e);
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Appbar style={{backgroundColor: '#111111'}}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Movie Name" />
        </Appbar>
        <View style={{width: '100%', height: 230}}>
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
        <View
          style={{
            paddingHorizontal: '2%',
            backgroundColor: '#111111',
            paddingVertical: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontSize: moderateScale(20),
                  fontWeight: '600',
                  color: 'white',
                }}>
                Movie Name
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontWeight: '500',
                  color: 'white',
                }}>
                Movie Stars, Singers and Directors
              </Text>
            </View>
            <Icon
              name="heart-outline"
              color={'white'}
              size={moderateScale(25)}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: moderateScale(20),
                fontWeight: '600',
                color: 'white',
                marginEnd: 5,
              }}>
              Rating :
            </Text>
            <Icon name="star" size={moderateScale(20)} color={'yellow'} />
            <Icon name="star" size={moderateScale(20)} color={'yellow'} />
            <Icon name="star" size={moderateScale(20)} color={'yellow'} />
            <Icon name="star" size={moderateScale(20)} color={'yellow'} />
            <Icon name="star" size={moderateScale(20)} color={'grey'} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image
                source={require('../../media/imdblogo.png')}
                style={{width: '100%', height: 30}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: moderateScale(15),
                  fontWeight: '600',
                  color: 'white',
                  marginEnd: 5,
                }}>
                90%
              </Text>
            </View>
            <View
              style={{height: '100%', borderWidth: 0.5, borderColor: 'white'}}
            />
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image
                source={require('../../media/rottentomato.png')}
                style={{width: '100%', height: 30}}
                resizeMode="center"
              />
              <Text
                style={{
                  fontSize: moderateScale(15),
                  fontWeight: '600',
                  color: 'white',
                  marginEnd: 5,
                }}>
                90%
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: moderateScale(20),
            fontWeight: '600',
            color: 'white',
            marginEnd: 5,
            marginStart: '2%',
          }}>
          Story Line :
        </Text>
        <View style={{marginHorizontal: '2%'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{color: 'white'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              ornare sem. Pellentesque vel arcu ante. Nam accumsan, justo eget
              convallis feugiat, purus nunc vehicula mi, quis ultricies nunc
              felis ut nisl. Aenean cursus est ex, sit amet dapibus lectus
              tincidunt sit amet. Donec auctor fringilla nulla, sit amet luctus
              mi. Proin id sem ante. Nulla pretium lectus mi, et ornare urna
              convallis ut. Proin ac tincidunt elit. Sed in mattis urna. Morbi
              dapibus ligula ac augue lobortis aliquet. Aenean ullamcorper,
              magna ut venenatis imperdiet, purus orci egestas massa, eget
              pellentesque libero libero facilisis ex. Phasellus interdum tortor
              sed leo bibendum sagittis. Aliquam ullamcorper nec magna sit amet
              imperdiet. Donec eu porta risus. Proin ac egestas augue. In
              iaculis sollicitudin sem in iaculis. Vestibulum est tellus,
              egestas non volutpat vitae, dignissim vitae nibh. Nulla finibus
              venenatis velit at consequat. Quisque egestas tempor semper.
              Praesent finibus nulla orci, et condimentum enim vulputate sed.
              Duis vitae turpis at diam luctus pulvinar nec in sem.
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default MovieScreen;
