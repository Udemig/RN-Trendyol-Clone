import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widgetHeaderProps} from '../../models/ui/widgetProps';
const WidgetHeader: React.FC<widgetHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default WidgetHeader;
