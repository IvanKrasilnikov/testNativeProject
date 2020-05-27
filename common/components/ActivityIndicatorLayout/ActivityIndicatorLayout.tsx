import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface IProps {
  children: React.ReactNode | React.ReactNodeArray;
  style?: {[name: string]: string | number};
}

const ActivityIndicatorLayout: React.FC<IProps> = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ActivityIndicatorLayout;