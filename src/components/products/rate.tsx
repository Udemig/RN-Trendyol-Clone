import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import {RatingProps} from '../../models/ui/rateProps';
const Rate: React.FC<RatingProps> = ({rating, size}) => {
  const fullStar = Math.floor(rating.rate);
  const halfStar = rating.rate % 1 >= 0.5;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={[styles.rate, {fontSize: size == 'large' ? 18 : 14}]}>
          {rating.rate}{' '}
        </Text>
        {Array(fullStar)
          .fill(null)
          .map((item, index) => (
            <Icon
              key={index}
              name={'star'}
              size={size == 'small' ? 15 : 20}
              color={Colors.PRIMARY}
            />
          ))}
        {halfStar && (
          <Icon
            name={'star-half'}
            size={size == 'small' ? 15 : 20}
            color={Colors.PRIMARY}
          />
        )}
      </View>
      {size == 'large' && (
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.rate}> | {rating.count} Değerlendirme</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rate: {
    fontWeight: 'bold',
  },
});

export default Rate;
