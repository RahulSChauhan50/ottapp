import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {Card, Avatar, List} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import SnapCarousal from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Carousal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SnapCarousal
          data={this.props.data}
          renderItem={({item, index}) => (
            <Image
              source={{uri: item.img}}
              style={{width: '100%', height: '100%', borderRadius: 10}}
              resizeMode="cover"
            />
          )}
          onSnapToItem={index => this.setState({activeSlide: index})}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={(Dimensions.get('window').width * 70) / 100}
          keyExtractor={(item, ind) => ind}
          firstItem={1}
        />
        <View
          style={{
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {this.props.data.map((item, ind) =>
            this.state.activeSlide === ind ? (
              <Icon
                key={ind}
                name="checkbox-blank-circle"
                size={moderateScale(12)}
                style={{marginHorizontal: 8}}
                color={'#0077b6'}
              />
            ) : (
              <Icon
                key={ind}
                name="checkbox-blank-circle"
                size={moderateScale(8)}
                style={{marginHorizontal: 8}}
                color={'#adb5bd'}
              />
            ),
          )}
        </View>
      </View>
    );
  }
}

export default Carousal;
