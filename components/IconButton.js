import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function IconButton({icon, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => {
        pressed && styles.pressed;
      }}>
      <Icon name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
