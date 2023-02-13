import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View,Text, ScrollView, RefreshControl} from "react-native";
import SimpleButton from "../components/SimpleButton";
import { increment, decrement } from "../actions/counter";
import { storeTask, removeAllTask} from "../actions/task";
import SimpleCard from "../components/SimpleCard";




const AddTaskScreen = ({navigation}) => {      
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Add Task ')}
      />
  </View> 
    
  )
};

export default AddTaskScreen;
