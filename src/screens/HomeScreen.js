import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View,Text, ScrollView, RefreshControl, StyleSheet} from "react-native";
import SimpleButton from "../components/SimpleButton";
import HttpService from "../services/HttpService";
import { storeTask, removeAllTask} from "../redux/actions/task";
import SimpleCard from "../components/SimpleCard";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const valueState = useSelector(state=>state.task.tasks)    
  const dispatch = useDispatch()

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    HttpService.get('http://192.168.1.6:8084/api/taskList')
      .then((result) => {
        setData(result.data)
        dispatch(storeTask({
            data: result.data
            
        }))
        setRefreshing(false)
      })
  }, []);
    

  useEffect(()=>{
    HttpService.get('http://192.168.1.6:8084/api/taskList')
      .then((result) => {
        setData(result.data)
        dispatch(storeTask({
            data: result.data
            
        }))
    })
  }, [])
    

  useEffect(() => {
    setData(valueState)
  }, [valueState])
    
  return (
    <>
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Page content</Text>
  
      <ScrollView 
        refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >  
    <View>
      {data.map((item)=>{
        console.log("item", item)
        return(
          <SimpleCard
          id={item.id}
          description={item.description}
          completed={item.completed}
          />
        )
      })}
    </View>    
      
    <View>
      <SimpleButton
        title="Add Task"
        onPress= {()=>console.log("hello")}    
        />
      <SimpleButton 
        title="Remove All Task"
        onPress={()=>{
          setData([])
          dispatch(removeAllTask())
          
        }}
        />
    </View>
    </ScrollView>
    </SafeAreaView>
    
    </>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});