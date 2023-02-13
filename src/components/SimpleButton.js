import React from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";
import { Button } from '@rneui/themed';

const SimpleButton = ({title,onPress}) => {
  
  return (

    <Button
        title={title}
        onPress={onPress}
      />     
  );
};

export default SimpleButton;
