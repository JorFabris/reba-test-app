import React from 'react';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../assets/Colors';

interface IProps{
    rate: number;
    reviews: number;
    textSize?: number
    iconSize?: number
}

const StarsRate = ({rate, reviews, textSize = 13, iconSize = 12 }: IProps) => {

    const renderStars = () => {
        const STARS = [];
        for (let index = 1; index <= rate; index++) {
          STARS.push(
            <Icon
              key={`star-${index}`}
              style={{margin: 4}}
              name="star"
              size={iconSize}
              color={Colors.gold}
              solid
            />,
          );
        }
        if (rate % 1 !== 0) {
          STARS.push(
            <Icon
              key={`star-${new Date().getTime()}`}
              style={{margin: 4}}
              name="star-half"
              size={iconSize}
              color={Colors.gold}
              solid
            />,
          );
        }

        return STARS;
      };

    return (
        <View style={{flexDirection: 'row'}}>
            {renderStars()}
            <Text style={{
                fontWeight: '600',
                fontSize: textSize,
                color: Colors.textColor,
                marginTop: 2,
            }}>
              {rate}/5 ({reviews})
            </Text>
        </View>
    );
};


export default StarsRate;
