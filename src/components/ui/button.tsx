import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {ButtonProps} from '../../models/ui/buttonProps';

const Button: React.FC<ButtonProps> = props => {
  const {title, disabled, onPress} = props;
  return (
    <TouchableOpacity
      {...props}
      onPressIn={onPress}
      style={[
        styles.container,
        {backgroundColor: disabled ? Colors.GRAY : Colors.PRIMARY},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height * 0.047,
    borderRadius: 5,
    margin: 5,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});

export default Button;
