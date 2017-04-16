import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
    <View style={[styles.containerStyle, props.style]}>
      { props.children }
    </View>
  )
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    // borderWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export { CardSection };