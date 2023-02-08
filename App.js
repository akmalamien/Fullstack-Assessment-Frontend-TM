import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import store from './redux/store';
import{ addTask, removeTask, fetchTasks } from './redux/actions';







const TodoList = () => {
    
    useEffect(() => {
      store.dispatch(fetchTasks());
    }, []);
  
    return (
      <View>
               
        
        {store.getState().tasks.map(task => (
        <View key={task.id}>
          <Text>Task : {task.description}</Text>
          <Text>{task.id}</Text>
          <Button
            title="Remove"
            onPress={() => store.dispatch(removeTask(task.id))}
          />
        </View>
      ))}
      <Button 
        title="Add New Task"
        onPress={() =>
          store.dispatch(
            addTask({ id: Date.now(), title: 'A new task' })
          )
        }
      />
    </View>
  );
};



export default TodoList;