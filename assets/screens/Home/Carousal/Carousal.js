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
import SnapCarousal, {Pagination} from 'react-native-snap-carousel';
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <SnapCarousal
          ref={c => {
            this._carousel = c;
          }}
          data={this.props.data}
          renderItem={({item, index}) => (
            <Image
              source={{uri: item.img}}
              style={{width: '100%', height: '100%'}}
            />
          )}
          onSnapToItem={index => this.setState({activeSlide: index})}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={(Dimensions.get('window').width * 70) / 100}
          keyExtractor={(item, ind) => ind}
        />
        <View>
          <Pagination
            dotsLength={this.props.data.length}
            activeDotIndex={this.state.activeSlide}
            containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotStyle={
              {
                // Define styles for inactive dots here
              }
            }
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Carousal;
