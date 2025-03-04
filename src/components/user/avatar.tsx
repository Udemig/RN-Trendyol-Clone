import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AvatarProps} from '../../models/ui/avatarProps';
import {Colors} from '../../theme/colors';
import {getInitials} from '../../utils/functions';
const Avatar: React.FC<AvatarProps> = ({name, surname, image, size}) => {
  return (
    <View style={[styles.container, {width: size, height: size}]}>
      <Text style={{fontSize: 30}}>{getInitials(name, surname)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GREEN,
    borderRadius: 50,
  },
});

export default Avatar;
